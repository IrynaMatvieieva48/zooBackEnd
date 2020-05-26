const mongoose = require('mongoose')

var Ticket = mongoose.model('Ticket',{
    name: {type: String},
    surname: {type: String},
    email: {type: String},
    type: {type: String},
    price: {type: Number}
    }, 'tickets');
module.exports = {
    Ticket: Ticket
};
