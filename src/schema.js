import { validateTypes } from './schemaTypes';
import { validateValidators } from './validators';
import { is } from './is';

/**
 * @class Schema
 * @description
 */
export default class Schema {

    /**
     * @param  {Object} schema
     */
    constructor( schema ) {
        this.constructor.validate( schema );
        this.schema = schema;

        return this;
    }

    /**
     * @param  {Object} schema
     */
    static validate( schema ) {
        if ( !is.Object(schema) ) {
            throw TypeError(`Invalid. Schema must be object`);
        } else if ( !schema ) {
            throw Error(`Invalid Schema`);
        } else {
            validateTypes( schema );
            validateValidators( schema );
        }

    }

}
