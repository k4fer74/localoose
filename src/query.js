import LocalStorage from './localStorage';
import ObjectId from './objectId';

/**
 * @class Query
 * @description This class helps with object querying
 */
export default class Query {

    /**
     * @param  {String} table_name `Table` name to storage data
     * @param  {Object} data  Object data to persist
     */
    static save( table_name, data ) {
        /**
         * Check if the data have a ID property,
         * if no, then create new ID with UUID
         * @type {Boolean}
         */
        let has_id = data.hasOwnProperty("id");
        if ( !has_id ) {
            data.id = new ObjectId().UUID;
        }

        if ( !LocalStorage.tableExists(table_name) ) {
            LocalStorage.newTable(table_name, data);
        } else {
            /**
             * The table exists, then PUSH data into table
             */
            LocalStorage.push(table_name, data);
        }
    }

}
