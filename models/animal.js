const mongoose = require('mongoose')

var Animal = mongoose.model('Animal',{
    name: {type: String},
    description: {type: String},
    picture: {type: String}
}, 'animals');

module.exports = {
    Animal: Animal
};
