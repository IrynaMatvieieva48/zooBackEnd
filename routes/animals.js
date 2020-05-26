const express = require('express');
var router = express.Router();

var {Animal} = require('../models/animal');

router.get('/', (req, res) => {
    Animal.find((err, docs) => {
        if(!err)
            res.send(docs);
        else console.log("error in returning all animals");
    });
})

module.exports = router;

