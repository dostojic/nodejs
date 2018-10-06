'use strict'

var sql = require('mssql');
var sqlDbConfiguration = require('../data/SqlDbConfiguration');

const config = {
    user: 'timesheet',
    password: 'timesheet',
    server: 'LENOVO-YOGA-DEJ\SQLEXPRESS',
    database: 'Timesheet',
    options: {
        encrypt: true
    }
}

function ClientRepository() {}

ClientRepository.prototype.getAll = function() {
    console.log('loading clients from database');

    sql.connect(config, error => {
        if (error) {
            console.log('There was an issue connecting to SQL server, error: ' + error);
            return null;
        }

        new sql.Request().query('select * from Client', (error, result) => {
            if (error) {
                console.log('An error has happened: ' + error);
                return null;
            }

            return result;
        })
    });

    sql.on('error', err => {
        console.log('an error has happened: ' + err);
    });
}

ClientRepository.prototype.getById = function(clientId) {
    return {
        id: clientId,
        name: "Microsoft"
    }
}

exports.ClientRepository = ClientRepository;