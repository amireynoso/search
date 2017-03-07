const helpers = require('./helpers');

module.exports = class ItemController {
    static parse (response) {
        const parsedItem = JSON.parse(response[0]);
        const parsedDescription = JSON.parse(response[1]);

        return {
            item: Object.assign({},
                this.modelItem(parsedItem),
                this.modelDescription(parsedDescription))
        };
    }

    static modelItem(item) {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: helpers.getDecimals(item.price)
            },
            picture: item.pictures[0].secure_url,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
        };
    }

    static modelDescription(description) {
        const descriptionText = description.text.trim() !== ''
                              ? description.text : description.plain_text;
        return {
            description: descriptionText,
        };
    }
};