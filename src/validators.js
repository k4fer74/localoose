/**
 * All validators supported
 * @type {Array}
 */
export const VALIDATORS = [
    'required', 'min', 'max', 'default'
];

/**
 * @param  {Object|@class Schema} schema
 */
export const validateValidators = schema => {
    hasRequired( schema );
    hasMinMax( schema );
    hasDefault( schema );
}

/**
 * [hasRequired description]
 * @param  {[type]} schema [description]
 * @return {[type]}        [description]
 */
const hasRequired = schema => {
    let required_type = 'Boolean';
    for ( let prop in schema ) {
        let required_prop = schema[prop].required;
        if ( typeof required_prop !== 'undefined' ) {
            let required_prop_value = required_prop.constructor.name;
            if ( required_prop_value !== required_type ) {
                throw TypeError(`${required_prop_value} is not a Boolean. Use: 'true' or 'false'`);
            }
        }
    }
}

/**
 * [hasMinMax description]
 * @param  {[type]} schema [description]
 * @return {[type]}        [description]
 */
const hasMinMax = schema => {
    for ( let prop in schema ) {

        let min_prop = schema[prop].min;
        let max_prop = schema[prop].max;

        if ( typeof min_prop !== 'undefined' ) {
            validateMinMax('min', min_prop);
        }

        if ( typeof max_prop !== 'undefined' ) {
            validateMinMax('max', max_prop);
        }

    }
}

/**
 * [validateMinMax description]
 * @param  {[type]} prop [description]
 * @return {[type]}      [description]
 */
const validateMinMax = (name, prop) => {

    if ( Array.isArray(prop) ) {

        let amount  = prop[0];
        let message = prop[1];

        if ( typeof amount == 'undefined' || typeof amount !== 'number' ) {
            throw TypeError(`Invalid first index (number) from '${name}' property. Must be Number.`)
        }

        if ( typeof message !== 'undefined' && typeof message !== 'string' ) {
            throw TypeError(`Invalid second index (message) from '${name}' property. Must be String.`)
        }

    } else if ( typeof prop !== 'number' ) {
        throw TypeError(`Invalid value to '${name}' property. Use: Number or Array.`)
    }

}

/**
 * [hasDefault description]
 * @param  {[type]} schema [description]
 * @return {[type]}        [description]
 */
const hasDefault = schema => {

}
