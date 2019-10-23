var mongoose = require('mongoose');
var Article = require('./article');
var Channel = require('./channel').schema;

var UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    channel: {type: Channel},
    likes: [Article],
    read_later: [Article],
    avatarUrl : {type : String , default: "defaultAvatar.png"}
}, { timestamps: true });

module.exports = User = mongoose.model('User', UserSchema);


// let User = module.exports = mongoose.model('User', UserSchema);