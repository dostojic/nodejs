'use strict'

var Rectangle = require("./Rectangle").Rectangle;

function Squere(size) {
    //this.height = size;
    //this.weight = size;

    Rectangle.call(this, size, size);
}

Squere.prototype = new Rectangle();
Squere.prototype.constructor = Squere;

Squere.prototype.toString = function() {
    return "Squere height = " + this.height + " weight = " + this.weight;
}

exports.Squere = Squere;