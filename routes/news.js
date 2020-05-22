const express = require('express');
var router = express.Router();

var {News} = require('../models/news');

router.get('/', (req, res) => {
    News.find((err, docs) => {
        if(!err)
            res.send(docs);
        else console.log("error in returning all news " + JSON.stringify(err, undefined, 2));
    });
})
