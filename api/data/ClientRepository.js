'use strict'

function ClientRepository() {}

ClientRepository.prototype.getAll = function() {
    console.log('loading clients from database');
    return [{
        id: 1,
        name: "Microsoft"
    },
    {
        id: 2,
        name: "Apple"
    },
    {
        id: 3,
        name: "HP"
    }];
}

ClientRepository.prototype.getById = function(clientId) {
    return {
        id: clientId,
        name: "Microsoft"
    }
}

exports.ClientRepository = ClientRepository;