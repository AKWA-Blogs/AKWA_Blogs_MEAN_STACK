var mongoose = require("mongoose");
var comment = require("./comment");
var user = require("./user")
const article = {};

 article.ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: {type: user.UserSchema, required: true},
    likes: [String],
    comments: [comment.CommentSchema],
}, { timestamps: true });

module.exports = article;
// let Article = module.exports = mongoose.model('Task', TaskSchema);
