const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/zooDB',{useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
    if(!err)
        console.log('connection succeeded')
    else console.log('error connection');
});

module.exports = mongoose;
