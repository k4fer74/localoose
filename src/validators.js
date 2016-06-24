import { is } from './is';

/**
 * All validators supported
 * @type {Array}
 */
export const VALIDATORS = [
    'type', 'required', 'min', 'max', 'default'
];

/**
 * @param  {Object|@class Schema} schema
 */
export const validateValidators = schema => {
    hasRequired( schema );
    hasMinMax( schema );
    hasDefault( schema );
    checkInvalidProperties( schema );
}

/**
 * Check if schema have 'required' property
 */
const hasRequired = schema => {
    let required_type = 'Boolean';
    for ( let prop in schema ) {
        let required_prop = schema[prop].required;
        if ( !is.Undefined(required_prop) ) {
            let required_prop_value = required_prop.constructor.name;
            if ( required_prop_value !== required_type ) {
                throw TypeError(`${required_prop_value} is not a Boolean. Use: 'true' or 'false'`);
            }
        }
    }
}

/**
 * Check if schema have 'min' and/or 'max' properties
 */
const hasMinMax = schema => {
    for ( let prop in schema ) {

        let min_prop = schema[prop].min;
        let max_prop = schema[prop].max;

        if ( !is.Undefined(min_prop) ) {
            validateMinMax('min', min_prop);
        }

        if ( !is.Undefined(max_prop) ) {
            validateMinMax('max', max_prop);
        }

    }
}

/**
 * Validate properties 'min' and 'max'
 * @param {String} name
 * @oaran {String} prop
 */
const validateMinMax = (name, prop) => {

    if ( is.Array(prop) ) {

        let amount  = prop[0];
        let message = prop[1];

        if ( is.Undefined(amount) || !is.Number(amount) ) {
            throw TypeError(`Invalid first index (number) from '${name}' property. Must be Number.`)
        }

        if ( !is.Undefined(message) && !is.String(message) ) {
            throw TypeError(`Invalid second index (message) from '${name}' property. Must be String.`)
        }

    } else if ( !is.Number(prop) ) {
        throw TypeError(`Invalid value to '${name}' property. Use: Number or Array.`)
    }

}

/**
 * Validate if the property has invalid properties
 */
const checkInvalidProperties = schema => {
    for ( let schema_prop in schema ) {
        if ( is.Object(schema[schema_prop]) ) {
            for ( let prop_from_shema_prop in schema[schema_prop] ) {
                if ( VALIDATORS.indexOf(prop_from_shema_prop) === -1 ) {
                    throw Error(`Invalid property '${prop_from_shema_prop}' in Schema`);
                }
            }
        }
    }
}

/**
 * [hasDefault description]
 * @param  {[type]} schema [description]
 * @return {[type]}        [description]
 */
const hasDefault = schema => {

}
