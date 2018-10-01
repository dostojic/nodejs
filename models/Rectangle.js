'use strict'

function Rectangle(height, weight) {
    this.height = height;
    this.weight = weight;
}

Rectangle.prototype.getArea = function() {
    return this.height * this.weight;
}

Rectangle.prototype.toString = function() {
    return "Rectangle height = " + this.height + " weight = " + this.weight;
}

exports.Rectangle = Rectangle;