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
    ticketCategory: req.body.ticketCategory,
    price: req.body.price
    })
    newTicket.save((err, docs) => {
        if(!err)
            res.send(docs);
        else console.log("ticket wasn't created");
    })
})

module.exports = router;
