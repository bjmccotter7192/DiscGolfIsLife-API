let db_tools = require('../tools/db_tools');
let mongoose = require('mongoose');
let Disc = require('../models/disc');

let db = db_tools.DBConnectMongoose();

exports.getDiscs = () => {
    return new Promise((resolve, reject) => {
        Disc.find()
            .then(discs => { resolve(discs) })
            .catch(err => {
                console.log("Error retrieving discs: " + err);
                reject(err);
            });
    })
}

exports.createDisc = (discData) => {
    var disc = new Disc(discData);
    return new Promise((resolve, reject) => {
        disc.save()
            .then(disc => {
                console.log("disc created!");
                resolve(disc);
            })
            .catch(err => {
                console.log("Error saving disc: " + err);
                reject(err);
            });
    })
}

exports.updateDisc = (discData) => {
    return new Promise((resolve, reject) => {
        Disc.findById(discData._id)
            .then(disc => {
                disc.discName = discData.discName;
                disc.save().then(disc => { resolve(disc) })
            })
            .catch(err => {
                reject(`Unable to update disc ${discData.discId}`);
            });
    });
}

exports.deleteDisc = (discId) => {
    return new Promise((resolve, reject) => {
        disc.findByIdAndRemove(discId)
            .then(disc => {
                if (disc) console.log(`disc ${disc.discName} deleted`);
                resolve(discId);
            })
            .catch(err => {
                console.log("Error deleting disc: " + err);
                reject(err);
            });
    });
}