import { isUndefined } from './is';

/**
 * All types supported to Schema
 * @type {Array}
 */
export const TYPES = [
    'String', 'Number', 'Date', 'Boolean', 'Array'
];

/**
 * Validate all types based on TYPES
 * @param  {Object} schema
 */
export const validateTypes = schema => {
    for ( let prop in schema ) {
        let type_prop = schema[prop].type;
        if ( !isUndefined(type_prop) ) {
            if ( TYPES.indexOf(type_prop.name) === -1 ) {
                throw TypeError(`Invalid Schema Type '${type_prop}'`);
            }
        } else {
            let type_prop = schema[prop];
            if ( TYPES.indexOf(type_prop.name) === -1 ) {
                throw TypeError(`Invalid Schema Type '${type_prop}'`);
            }
        }
    }
}


