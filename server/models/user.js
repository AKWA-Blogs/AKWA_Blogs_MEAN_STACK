var mongoose = require('mongoose');
var articl = require('./article');

var UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    // channels:[ChannelSchema],
    // likes:[articl.ArticleSchema],
    // read_later: [articl.ArticleSchema]
}, { timestamps: true });


let User = module.exports = mongoose.model('User', UserSchema);