module.exports = class ItemsController {
    static parse (response) {
        const parsedResponse = JSON.parse(response);
        const results = parsedResponse.results;

        return {
            categories: this.modelCategories(results),
            items: this.modelResults(results),
        };
    }

    static modelCategories (results) {
        return results.map(result => {
            return this.modelCategory(result);
        });
    }

    static modelCategory (result) {
        return result.category_id;
    }

    static modelResults (results) {
        return results.map(result => {
            return this.modelItem(result);
        });
    }

    static modelItem (item) {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
        };
    }
};