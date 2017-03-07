const config = require('../config/config');

module.exports = class Helpers {
    static getDecimals(amount) {
        const price = amount.toString();
        return price.indexOf(config.separator) > 0
             ? parseInt(price.split(config.separator).pop())
             : null;
    }
};