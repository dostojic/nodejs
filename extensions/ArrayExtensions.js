'use strict'

Array.prototype.sum = function() {
    return this.reduce(function(previous, current) {
        return previous + current;
    });
};