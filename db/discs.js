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

exports.addDisc = (discData) => {
    var disc = new Disc(discData);
    console.log(disc);
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
        Disc.findByIdAndUpdate(discData._id, discData, {new: true}, (error, updatedDisc) => {
            if(error){
                reject(error);
            }
            resolve(updatedDisc);
        });
    });
}

exports.deleteDisc = (discId) => {
    console.log(discId);
    return new Promise((resolve, reject) => {
        Disc.findByIdAndRemove(discId)
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