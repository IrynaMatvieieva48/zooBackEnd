const express = require('express');
var router = express.Router();

var {Ticket} = require('../models/ticket');

router.get('/', (req, res) => {
    Ticket.find((err, docs) => {
        if(!err)
            res.send(docs);
        else console.log("error in returning all tickets");
    });
})

router.post('/', (req, res) => {
    var newTicket = new Ticket({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    type: req.body.type,
    price: req.body.price
    })
    newTicket.save((err, docs) => {
        if(!err)
            res.send(docs);
        else console.log("ticket wasn't created");
    })
})

module.exports = router;
