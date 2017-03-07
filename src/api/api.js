const express = require('express');
const api = express();
const router = express.Router();
const PORT = process.env.PORT || 3333;
const controller = require('./controllers/routes');
const middleware = require('./middleware');
const parser = require('body-parser');

router.use(middleware.logger);

api.use(parser.urlencoded({ extended: true }));
api.use(parser.json());

router.get('/items/:query', controller.search);
//router.get('/items/:id', controller.item);

api.use('/api', router);

api.listen(PORT, function () {
    console.log(`API: Listening on port ${PORT}...`);
});