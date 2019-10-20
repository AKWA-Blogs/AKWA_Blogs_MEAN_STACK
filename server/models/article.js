var mongoose = require("mongoose");
var comment = require("./comment");

var ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    // author: { type: Schema.Types.ObjectId, ref: 'User' },
    likes: {type: Array},
    comments: [comment.CommentSchema],
}, { timestamps: true });

let Article = module.exports = mongoose.model('Article', ArticleSchema);