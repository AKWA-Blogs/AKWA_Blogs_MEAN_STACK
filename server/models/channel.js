var mongoose = require("mongoose");
var User = require("./user");
var Article = require("./article");


 var ChannelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    owner: {type: User, required: true},
    tags: [String],
    articles: [Article],
    subscribers: [String]
}, { timestamps: true });

module.exports = Channel = mongoose.model('Channel', ChannelSchema);