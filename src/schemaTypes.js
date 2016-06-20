/**
 * All types supported to Schema
 * @type {Array}
 */
export const TYPES = [
    'String', 'Number', 'Date', 'Buffer', 'Boolean', 'Array'
];

/**
 * Validate all types based on TYPES
 * @param  {Object} schema
 */
export const validateTypes = function( schema ) {
    for ( let prop in schema ) {
        let type_prop = schema[prop].type;
        if ( typeof type_prop !== 'undefined' ) {
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
