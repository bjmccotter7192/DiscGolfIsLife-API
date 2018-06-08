var discsDomain = require('../domain/discs');

exports.addDisc = (req, res, next) => {
    var discData = req.body;
    console.log('adding disc', discData);
    discsDomain.addDisc(discData)
        .then(disc => {
            console.log(disc);
            res.send(disc)
        })
        .catch(err => { res.status(400).send(err) })
}

exports.getDiscs = (req, res, next) => {
    discsDomain.getDiscs()
        .then(discs => { res.send(discs) })
        .catch(err => { res.status(400).send(err) })
}

exports.deleteDisc = (req, res, next) => {
    var discId = req.params.id;
    discsDomain.deleteDisc(discId)
        .then(disc => {
            res.send(disc);
        })
        .catch(err => { res.status(400).send(err) })
}

exports.updateDisc = (req, res, next) => {
    let discData = req.body;
    discData._id = req.params.id;
    discsDomain.updateDisc(discData)
        .then(disc => {
            res.send(disc);
        })
        .catch(err => { res.status(400).send(err) })
}