const mongoose = require('mongoose')
const schema = mongoose.Schema;

const News = new schema ({
    date: {type: Date,default: Date.now()},
    title: String,
    content: String,

})

module.exports = mongoose.model('News', News);