const express = require('express');
var router = express.Router();

var {Animals} = require('../models/animal');

router.get('/', (req, res) => {
    Animals.find((err, docs) => {
        console.log(docs);
        if(!err)
            res.send(docs);
        else console.log("error in returning all animals" + JSON.stringify(err, undefined, 2));
    });
})

module.exports = router;

