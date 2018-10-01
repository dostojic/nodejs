'use strict'

require('./extensions/ArrayExtensions');
require('colors');

var http = require('http');
var uc = require('upper-case');
var Calculator = require('./Calculator');
var StringHelper = require('./helpers/StringHelper').StringHelper;
var Rectangle = require('./models/Rectangle').Rectangle;
var Squere = require('./models/Squere').Squere;
var resources = require('./resources/resources');
var _ = require('underscore');

const FirstName = 'Dejan';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var stringHelper = new StringHelper('Hello');
    stringHelper.toUpper(); // this is just because of test, there's 'upper-case' package for this

    var numbers = [15, 2, 1, 4, 3];
    var sum = numbers.sum().toString();

    var book = {
        name: "Beginning Node.js",
        toString: function() {
            return this.name;
        }
    }

    var rectangle = new Rectangle(10, 5);
    var squere = new Squere(6);
    var m2 = squere.getArea().toString(); // 36

    console.log('hello'.rainbow);

    res.end(resources.title);
}).listen(8080);