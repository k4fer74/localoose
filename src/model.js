import Schema from './schema';
import Query from './query';
import localStorage from './localStorage'

import { validateModel } from './genericValidations';
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

    /**
     * Save model
     * @param  {Function} callback
     */
    save( callback ) {
        if ( !is.Function(callback) ) {
            throw TypeError("The save() arg must be a function");
        }

        let validate_errors = validateModel( this.model_data, this.schema );

        if ( validate_errors.length > 0 ) {
            callback(validate_errors);
        } else {
            /**
             * Save the model
             */
            Query.save(this.model_name, this.model_data);
            /**
             * Update callback
             */
            callback(null, this.model_data);
        }

    }

    /**
     * @param  {Function} callback
     */
    findAll( callback ) {
        if ( !is.Function(callback) ) {
            throw TypeError("The save() arg must be a function");
        }

        try {
            let result = JSON.parse(localStorage.get(this.model_name))
            callback(false, result);
        } catch( err ) {
            callback(err, null);
        }
    }

    /**
     * Return data based on id parameter
     * @param  {String}   id       UUID
     * @param  {Function} callback
     */
    findById( id, callback ) {
        if ( !is.Function(callback) ) {
            throw TypeError("The save() arg must be a function");
        }

        try {
            let data = JSON.parse(localStorage.get(this.model_name));
            let search = data.find(function( data ) {
                return data.id === id;
            });

            if ( is.Undefined(search) ) {
                throw `Not result for id: ${id}`;
            }

            callback(false, search);
        } catch ( err ) {
            callback(err, null);
        }
    }

    /**
     * Find data based on object conditions parameter
     * @param  {Object}   conditions
     * @param  {Function} callback
     * @return {Array} result result found based on conditions
     */
    find( conditions, callback ) {
        if ( !is.Function(callback) ) {
            throw TypeError("The callback() arg must be a function");
        }

        if ( !is.Object(conditions) ) {
            throw TypeError("The conditions arg must be a object");
        }

        try {
            let data = JSON.parse(localStorage.get(this.model_name))
              , result = []
              , i = 0;

            for ( i; i < data.length; i++ ) {
                let conditions_length = Object.keys(conditions).length;

                for ( let condition in conditions ) {
                    if ( data[i].hasOwnProperty(condition) && data[i][condition] == conditions[condition] ) {
                        conditions_length--;
                    }
                }

                if ( conditions_length === 0 ) {
                    result.push(data[i]);
                }
            }

            if ( result.length === 0 ) {
                throw (`Not results found on find()`);
            }

            callback(false, result);
        } catch( err ) {
            callback(err, null);
        }
    }

}
