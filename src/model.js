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
     * Find data based on object condition parameter
     * @param  {Object}   condition
     * @param  {Function} callback
     */
    find( condition, callback ) {
        if ( !is.Function(callback) ) {
            throw TypeError("The save() arg must be a function");
        }

        if ( !is.Object(condition) ) {
            throw TypeError("The condition arg must be a object");
        }
    }

}
