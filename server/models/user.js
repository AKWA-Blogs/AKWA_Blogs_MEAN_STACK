var mongoose = require('mongoose');
var article = require('./article');
const user = {};


user.UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // channels:[ChannelSchema],
    likes: [article],
    read_later: [article]
}, { timestamps: true });

module.exports = user;


// let User = module.exports = mongoose.model('User', UserSchema);