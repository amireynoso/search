const request = require('request-promise-native');
const config = require('./../config/config');
const controllers = require('./../controllers');

module.exports = class Middleware {
    static logger (req, res, next) {
        console.log(`API: ${req.originalUrl} was requested.`);
        next();
    }

    static search (req, res, next) {
        request(`${config.url}/sites/MLA/search?q=${req.params.query}&limit=${config.limit}&offset=1`)
            .then((items) => {
                res.data = Object.assign(res.data, controllers.search.parse(items));
                next();
            })
            .catch(next);
    }

    static item (req, res, next) {
        Promise.all([
            request(`${config.url}/items/${req.params.id}`),
            request(`${config.url}/items/${req.params.id}/description`)
        ]).then((data) => {
            res.data = Object.assign(res.data, controllers.item.parse(data));
            next();
        }).catch(next);
    }

    static author (req, res, next) {
        res.data = {
            author: config.author
        };
        next();
    }
};