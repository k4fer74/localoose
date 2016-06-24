import Model from './model';
import Schema from './schema';

import { is } from './is';

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

        if ( !is.String(model_name) ) {

            throw TypeError(`The Model name must be String.`);

        } else if (  is.Empty(model_name) || is.Null(model_name) ) {

            throw Error(`The Model name not be empty or null.`);

        } else if ( schema instanceof Schema === false ) {

            throw Error(`The Schema is invalid. Try 'new localoose().Schema();'`);

        } else {

            /**
             * Instance from @class Model
             */
            return Model.initialize( model_name, schema.schema );

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
