const mongoose = require('mongoose')

var Animals = mongoose.model('Animals',{
    name: {type: String},
    description: {type: String},
    picture: {type: String},
    toggle: {type:Boolean}
}, 'animals');

module.exports = {
    Animals: Animals
};
