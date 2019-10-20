var mongoose = require('mongoose');
var Article = require('./article');


var UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // channels:[ChannelSchema],
    likes: [Article],
    read_later: [Article]
}, { timestamps: true });

module.exports = User = mongoose.model('User', UserSchema);


// let User = module.exports = mongoose.model('User', UserSchema);