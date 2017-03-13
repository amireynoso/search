// SERVER
// =========================================

// Required modules
// -----------------------------------------
const express = require('express');
const path = require('path');
const React = require('react');

// Modules needed for server-side rendering
// -----------------------------------------
const { match, RouterContext } = require('react-router');
const { renderToString } = require('react-dom/server');

// Define our own modules
// -----------------------------------------
const server = express();
const router = express.Router();
const api = require('../api');

// Components
// -----------------------------------------
const routes = require('../client/routes').default;
const ErrorPage = require('../client/components/ErrorPage').default;

// Configuration
// -----------------------------------------
const PORT = process.env.PORT || 3333;

// Set the API
// -----------------------------------------
server.use('/api', api);

// Set client
// -----------------------------------------
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '../client/views'));
server.use(express.static(path.join(__dirname, 'static')));

server.get('*', (req, res) => {
    match(
        { routes, location: req.url },
        (err, redirectLocation, renderProps) => {

            // in case of error display the error message
            if (err) {
                return res.status(500).send(err.message);
            }

            // in case of redirect propagate the redirect to the browser
            if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            // generate the React markup for the current route
            let markup;
            if (renderProps) {
                // if the current route matched we have renderProps
                markup = renderToString(<RouterContext {...renderProps}/>);
            } else {
                // otherwise we can render a 404 page
                markup = renderToString(<ErrorPage/>);
                res.status(404);
            }

            // render the index template with the embedded React markup
            return res.render('index', { markup });
        }
    );
});

// Start up the server
// -----------------------------------------
server.listen(PORT, () => {
    console.log(`Server: Listening on port ${PORT}...`);
});