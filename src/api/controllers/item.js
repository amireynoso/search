const config = require('../config/config');

module.exports = class ItemController {
    static parse (response) {
        const parsedResponse = JSON.parse(response);

         /*“item”: {
            "id": String,
                "title": String,
                "price": {
                "currency": String,
                    "amount": Number,
                    "decimals": Number,
            },
        “picture”: String,
                "condition": String,
                "free_shipping": Boolean,
                "sold_quantity", Number
            "description": String
        }*/

        return parsedResponse;
    }
};