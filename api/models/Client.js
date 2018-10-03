'use strict'

function Client(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

Client.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}