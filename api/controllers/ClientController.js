'use strict'

function getAllClients(req, res) {
    console.log('getting all clients');
    res.send('getting all clients');
}

function createClient(req, res) {
    console.log('creating new client');
    res.send('creating new client');
}

function getClient(req, res) {
    console.log('getting client, id: ' + req.params.clientId);
    res.send('getting client, id: ' + req.params.clientId);
}

function updateClient(req, res) {
    console.log('updating client, id: ' + req.params.clientId);
    res.send('updating client, id: ' + req.params.clientId);
}

function deleteClient(req, res) {
    console.log('deleting client, id: ' + req.params.clientId);
    res.send('deleting client, id: ' + req.params.clientId);
}

exports.GetAllClients = getAllClients;
exports.GetClient = getClient;
exports.CreateClient = createClient;
exports.UpdateClient= updateClient;
exports.DeleteClient = deleteClient;