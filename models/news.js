const mongoose = require('mongoose')

var News = mongoose.model('News',{
    name: {type: String},
    description: {type: String},
    picture: {type: String}
}, 'news');

module.exports = {
    News: News
};
