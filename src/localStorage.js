const pluralize = require('pluralize');

/**
 * @class LocalStorage
 * @description
 */
export default class LocalStorage {

    /**
     * Create a new table if not exists
     * @param  {String} table_name
     * @param  {Object} initial_data when create a new table,
     * if exists a data, then save the data
     */
    static newTable( table_name, initial_data ) {
        /**
         * Pluralize table_name
         * @example
         * User = Users
         *
         * @type {String}
         */
        table_name = pluralize(table_name);

        if ( localStorage.getItem(table_name) === null ) {
            /**
             * Create a new item on storage
             * with a empty value
             */
            if ( initial_data ) {
                localStorage.setItem(table_name, JSON.stringify([initial_data]));
            } else {
                localStorage.setItem(table_name, "");
            }
        }
    }

    /**
     * Returns if the table by name exists
     * @param  {String} table_name
     * @return {Boolean}
     */
    static tableExists( table_name ) {
        table_name = pluralize(table_name);
        return localStorage.getItem(table_name) === null ? false : true;
    }

    /**
     * Get all data from table
     * @param  {String} table_name
     * @return {Array|String|Number|...}
     */
    static get( table_name ) {
        table_name = pluralize(table_name);
        return localStorage.getItem(table_name);
    }

    /**
     * Set a initial value to table
     * @param {String} table_name
     * @param {Object} data       Object to stringify
     */
    static set( table_name, data ) {
        table_name = pluralize(table_name);
        localStorage.setItem(table_name, JSON.stringify([data]));
    }

    static push( table_name, data ) {

    }

}
