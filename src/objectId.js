/**
 * @class ObjectId
 * @description generate new UUID
 */
export default class ObjectId {

    constructor() {
        let uuid = [];

        for ( let i = 0; i < 8; i++ ) {
            uuid.push(this.generateUUID);
        }

        let UUID = uuid.toString().replace(/,/g, "");

        return {
            UUID: UUID
        };
    }

    get generateUUID() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

}
