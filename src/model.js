import Schema from './schema';
import Query from './query';

import { VALIDATORS } from './validators';
import { is } from './is';

/**
 * @class Model
 * @description
 */
export default class Model {

    /**
     * @param  {Object} model_data data based on schema
     */
    constructor( model_data ) {
        this.model_data = model_data;
        this.model_name = Model.prototype.model_name;
        this.schema     = Model.prototype.schema;

        console.log(this);
    }

    /**
     * Get Model name and Schema to add in Model Prototype
     * @param  {String} model_name Model name
     * @param  {Schema} schema     schema from Model
     * @return {@class Model}
     */
    static initialize( model_name, schema ) {
        Model.prototype.model_name = model_name;
        Model.prototype.schema     = schema;

        return Model;
    }

    save( callback ) {
        this.validateModel();
        //Query.save(this.model_name, this.model_data);
    }

    validateModel( model = this.model_data, schema = this.schema ) {

        let validators = VALIDATORS
          , errors = [];

        /**
         * Validate properties from model
         */
        for ( let prop_model in model ) {
            if ( !schema.hasOwnProperty(prop_model) ) {
                errors.push(`${prop_model} is not a valid property in your Model`);
            }
        }

        for ( let prop_schema in schema ) {
            if ( model.hasOwnProperty(prop_schema) ) {
                let prop_type = schema[prop_schema].type;
                if ( !is.Undefined(prop_type) ) {

                    if ( model[prop_schema].constructor.name !== prop_type.name ) {
                        errors.push(`${prop_schema} is not a ${prop_type.name}`);
                    }

                    for ( let validator of validators ) {
                        let prop_validator = schema[prop_schema][validator];
                        if (!is.Undefined(prop_validator) ) {
                            switch ( validator ) {
                                case 'required':
                                    if ( is.Empty(model[prop_schema]) || is.Null(model[prop_schema]) ) {
                                        errors.push(`${prop_schema} not be empty or null`);
                                    }
                                break;

                                case 'min':
                                    if ( is.Array(prop_validator) ) {
                                        if ( model[prop_schema] < prop_validator[0] ) {
                                            if ( !is.Undefined(prop_validator[1]) ) {
                                                errors.push(`${prop_validator[1]}`)
                                            } else {
                                                errors.push(`${prop_schema} not be less than ${prop_validator[0]}`)
                                            }
                                        }
                                    } else {
                                        if ( model[prop_schema] < prop_validator ) {
                                            errors.push(`${prop_schema} not be less than ${prop_validator}`)
                                        }
                                    }
                                break;

                                case 'max':
                                    if ( is.Array(prop_validator) ) {
                                        if ( model[prop_schema] > prop_validator[0] ) {
                                            if ( !is.Undefined(prop_validator[1]) ) {
                                                errors.push(`${prop_validator[1]}`)
                                            } else {
                                                errors.push(`${prop_schema} not be grater than ${prop_validator[0]}`)
                                            }
                                        }
                                    } else {
                                        if ( model[prop_schema] > prop_validator ) {
                                            errors.push(`${prop_schema} not be less grater ${prop_validator}`)
                                        }
                                    }
                                break;

                            }
                        }
                    }

                } else {

                    if ( model[prop_schema].constructor.name !== schema[prop_schema].name ) {
                        errors.push(`${prop_schema} is not a ${schema[prop_schema].name}`);
                    }

                }

            } else {

                let default_value = schema[prop_schema].default;

                if ( !is.Undefined(default_value) ) {
                    model[prop_schema] = default_value;
                } else {
                    model[prop_schema] = null;
                }

            }
        }

        console.log(errors);
        console.log(model);

    }

}
