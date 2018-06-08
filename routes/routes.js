var express = require('express');
var router = express.Router();
var discs = require('./discs');

router.use(function(req, res, next) {
    console.log(`Processing ${req.method} request for ${req.originalUrl}`);
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'Disc Golf Is Life is running...' });
});

router.route('/discs').get(discs.getDiscs);
router.route('/discs').post(discs.addDisc);
router.route('/discs/:id').delete(discs.deleteDisc);
router.route('/discs/:id').put(discs.updateDisc);

module.exports = router;