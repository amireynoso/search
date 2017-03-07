// API
// =========================================

// Required modules
// -----------------------------------------
const express = require('express');

// Define our own modules
// -----------------------------------------
const api = express();
const router = express.Router();

// Configuration
// -----------------------------------------
const routes = require('./config/routes');
const PORT = process.env.PORT || 3333;

// The magic bits
// -----------------------------------------
const controllers = require('./controllers');
const middleware = require('./middleware');

//const parser = require('body-parser');

//api.use(parser.urlencoded({ extended: true }));
//api.use(parser.json());

// Set up router
// -----------------------------------------
api.use(routes.base, router);

// Log every route
// -----------------------------------------
router.use(middleware.logger);

// Define router middlewares
// -----------------------------------------
router.use(routes.index, middleware.author);
router.use(routes.search, middleware.search);
router.use(routes.item, middleware.item);

// Define router controllers
// -----------------------------------------
router.get(routes.search, controllers.routes.search);
router.get(routes.item, controllers.routes.item);

// Start up the API
// -----------------------------------------
api.listen(PORT, () => {
    console.log(`API: Listening on port ${PORT}...`);
});