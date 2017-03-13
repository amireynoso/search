// API
// =========================================

// Necessary bits
// -----------------------------------------
const express = require('express');
const router = express.Router();

// Configuration
// -----------------------------------------
const routes = require('./config/routes');

// Magic bits
// -----------------------------------------
const controllers = require('./controllers');
const middleware = require('./middleware');

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

// Export the API
// -----------------------------------------
module.exports = router;