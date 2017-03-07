const express = require('express');
const api = express();
const router = express.Router();
const routes = require('./config/routes');
const PORT = process.env.PORT || 3333;
const controllers = require('./controllers');
const middleware = require('./middleware');
const parser = require('body-parser');

api.use(parser.urlencoded({ extended: true }));
api.use(parser.json());

api.use(routes.base, router);

router.use(middleware.logger);

router.use(routes.index, middleware.author);

router.use(routes.search, middleware.search);
router.use(routes.item, middleware.item);

router.get(routes.search, controllers.routes.search);
router.get(routes.item, controllers.routes.item);

api.listen(PORT, function () {
    console.log(`API: Listening on port ${PORT}...`);
});