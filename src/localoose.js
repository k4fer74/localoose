import Model from './model';
import Schema from './schema';

/**
 * @class Localoose
 * @description
 */
export default class Localoose {

    constructor() {
        console.info("Localoose started");
    }

    /**
     * @param {String} model_name a name for model
     * @param {Object|@class Schema} schema
     */
    Model( model_name, schema ) {

        if ( typeof model_name !== 'string' ) {

            throw TypeError(`The Model name must be String.`)

        } else if ( model_name == '' ) {

            throw Error(`The Model name not be empty.`)

        } else if ( schema instanceof Schema === false ) {
            /**
             * If the schema parameter is not instance from Schema,
             * then validate schema
             */
            Schema.validate(schema);
        } else {

            /**
             * Instance from @class Model
             */
            return Model.initialize( model_name, schema );

        }

    }

    /**
     * @param {Object} schema
     */
    Schema( schema ) {
        return new Schema( schema );
    }

}

window.Localoose = Localoose;
