'use strict'

var ClientRepository = require('../data/ClientRepository').ClientRepository;

function ClientService() {
    this.clientRepository = new ClientRepository();
}

ClientService.prototype.getAll = function() {
    console.log('trying to load all clients from cache');

    //TODO: do some business logic
    // - get clients from cache
    // - if cache is empty load it from database
    // - populate cache with a list of clients

    return this.clientRepository.getAll();
}

ClientService.prototype.getById = function(clientId) {
    console.log('trying to load a client by id: ' + clientId);

    return this.clientRepository.getById(clientId);
}

exports.ClientService = ClientService;