'use strict'
let mongoose = require('mongoose');
let config = require('../config.json');

let db;

exports.DBConnectMongoose = function() {
    return new Promise(function(resolve, reject) {
        if (db) {
            return db;
        }
        mongoose.Promise = global.Promise;
        let connectionString = `mongodb://${config.db_config.user}:${config.db_config.pass}@${config.db_config.host}:${config.db_config.port}/?ssl=true&replicaSet=globaldb`;

        mongoose.connect(connectionString)
            .then(() => {
                console.log('mongo connection created');
                resolve(db);
            })
            .catch(err => {
                console.log('error creating db connection: ' + err);
                reject(db);
            });
    });
};