/**
 * @class LocalStorage
 * @description
 */
export default class LocalStorage {

    /**
     * Create a new table if not exists
     * @param  {String} table_name
     */
    static newTable( table_name ) {
        if ( localStorage.getItem(table_name) === null ) {

        }
    }

    /**
     * Get all data from table
     * @param  {String} table_name
     * @return {Array}
     */
    static get( table_name ) {

    }

    /**
     * [set description]
     * @param {[type]} table_name [description]
     * @param {[type]} data       [description]
     */
    static set( table_name, data ) {

    }

    static push( table_name, data ) {

    }

}
