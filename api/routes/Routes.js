'use strict'

var clientController = require('../controllers/ClientController');

module.exports = function(app) {
    app.route('/clients')
        .get(clientController.GetAllClients)
        .post(clientController.CreateClient);

    app.route('/clients/:clientId')
        .get(clientController.GetClient)
        .put(clientController.UpdateClient)
        .delete(clientController.DeleteClient);
};