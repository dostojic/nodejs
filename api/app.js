'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/Routes');

var app = express()
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());

routes(app);

var server = app.listen(8282, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});