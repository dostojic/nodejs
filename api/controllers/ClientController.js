'use strict'

function getAllClients() {
    console.log('getting all clients');
    res.send('getting all clients');
}

function createClient(req, res) {
    console.log('creating new client');
    res.send('creating new client');
}

function getClient(req, res) {
    console.log('getting client');
    res.send('getting client');
}

function updateClient(req, res) {
    console.log('updating client');
    res.send('updating client');
}

function deleteClient(req, res) {
    console.log('deleting client');
    res.send('deleting client');
}

exports.GetAllClients = getAllClients;
exports.GetClient = getClient;
exports.CreateClient = createClient;
exports.UpdateClient= updateClient;
exports.DeleteClient = deleteClient;