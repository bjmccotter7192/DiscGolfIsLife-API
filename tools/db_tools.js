'use strict'
let mongoose = require('mongoose');
//let localConfig = require('../localConfig');
let config = require('../config');

let db;

exports.DBConnectMongoose = function() {
    return new Promise(function(resolve, reject) {
        if (db) {
            return db;
        }
        mongoose.Promise = global.Promise;
        let connectionString = `mongodb://${config.db_user}:${config.db_pass}@${config.db_host}:${config.db_port}/?ssl=true&replicaSet=globaldb`;
       
        //Use for local debugging
        //let connectionString = `mongodb://${localConfig.db_config.user}:${localConfig.db_config.pass}@${localConfig.db_config.host}:${localConfig.db_config.port}/?ssl=true&replicaSet=globaldb`;

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