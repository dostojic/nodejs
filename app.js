'use strict'

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var inherits = util.inherits;
var fs = require('fs');

var express = require('express');
var app = express();

var emitter = new EventEmitter();

emitter.on('pageIsAccessed', function(arg1, arg2) {
    console.log("The page is accessed, with attributes %s and %s", arg1.a, arg2.b);
});

app.get('/', function(request, response) {
    emitter.emit('pageIsAccessed', { a: 'Dejan' }, { b: 'Ostojic' });

    //fs.createReadStream('./views/index.html').pipe(response);

    response.send('Hello World, this is Dejan' + request.query.name);
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Exaple app listening at http://%s:%s", host, port);
});