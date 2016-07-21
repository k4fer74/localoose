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
            if ( initial_data ) {
                let data = new Array(initial_data);
                localStorage.setItem(table_name, JSON.stringify(data));
            } else {
                /**
                 * Create a new item on storage
                 * with a empty value
                 */
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

        if ( !this.tableExists(table_name) ) {
            throw Error(`Could not find the table "${table_name}"`);
        }

        return localStorage.getItem(table_name);
    }

    /**
     * Set a initial value to table
     * @param {String} table_name
     * @param {Object} data       Object to stringify
     */
    static set( table_name, data ) {
        table_name = pluralize(table_name);

        if ( !this.tableExists(table_name) ) {
            throw Error(`Could not find the table "${table_name}"`);
        }

        localStorage.setItem(table_name, JSON.stringify(data));
    }

    /**
     * Add a new data into a existent table => @var table_name
     * @param  {String} table_name
     * @param  {Object} data
     */
    static push( table_name, data ) {
        let results = JSON.parse(this.get(pluralize(table_name)));
        results.push(data);

        this.set(table_name, results);
    }

    static update( table_name, index, data ) {
        let results = JSON.parse(this.get(pluralize(table_name)));
        results[index] = data;

        this.set(table_name, results);
    }

}
