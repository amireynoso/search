var express = require('express');
var router = express.Router();
var app = express();

app.get('/', function (req, res) {
    res.send('Hola');
});

app.get('/items/search/:query', function (req, res) {

});

app.get('/items/:id', function (req, res) {

});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});