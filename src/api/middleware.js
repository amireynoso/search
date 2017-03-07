class Middleware {
    static logger (req, res, next) {
        console.log(`API: ${req.originalUrl} was requested.`);
        next();
    }
};

module.exports = Middleware;