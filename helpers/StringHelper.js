'use strict'

var uc = require('upper-case');

function StringHelper(str) {
    this.str = str;
}

StringHelper.concatenate = function(str1, str2) {
    return str1 + str2;
}

StringHelper.prototype.toUpper = function() {
    return uc(this.str);
}

exports.StringHelper = StringHelper;