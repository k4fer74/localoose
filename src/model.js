import Schema from './schema';

/**
 * @class Model
 * @description
 */
export default class Model {

    /**
     * @param  {Object} model_data data based on schema
     */
    constructor( model_data ) {
        this.model_data = model_data;
        this.model_name = Model.prototype.model_name;
        this.schema     = Model.prototype.schema;

        console.log(this);
    }

    /**
     * Get Model name and Schema to add in Model Prototype
     * @param  {String} model_name Model name
     * @param  {Schema} schema     schema from Model
     * @return {@class Model}
     */
    static initialize( model_name, schema ) {
        Model.prototype.model_name = model_name;
        Model.prototype.schema     = schema;

        return Model;
    }

}
