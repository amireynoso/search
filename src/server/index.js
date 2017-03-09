// SERVER
// =========================================

// Required modules
// -----------------------------------------
const express = require('express');

// Define our own modules
// -----------------------------------------
const server = express();
const router = express.Router();
const api = require('../api');

// Configuration
// -----------------------------------------
const PORT = process.env.PORT || 3333;

// Set the API
// -----------------------------------------
server.use('/api', api);

// Start up the API
// -----------------------------------------
server.listen(PORT, () => {
    console.log(`Server: Listening on port ${PORT}...`);
});