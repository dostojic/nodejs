'use strict'

var ClientRepository = require('../data/ClientRepository').ClientRepository;
var clientRepository = new ClientRepository();

exports.getAll = function() {
    console.log('trying to load all clients from cache');

    //TODO: do some business logic
    // - get clients from cache
    // - if cache is empty load it from database
    // - populate cache with a list of clients

    return clientRepository.getAll();
}

exports.getById = function(clientId) {
    console.log('trying to load a client by id: ' + clientId);

    return clientRepository.getById(clientId);
}