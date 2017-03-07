const request = require('request-promise-native');
const config = require('./../config');
const itemsController = require('./items');

class RoutesController {
    static search (req, res) {
        request(`${config.url}/sites/MLA/search?q=${req.params.query}&limit=${config.limit}&offset=1`)
        .then((items) => {
            const body = itemsController.parse(items);
            res.status(200).json(body);
        });
    }
}

module.exports = RoutesController;