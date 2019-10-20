var mongoose = require("mongoose");
var Comment = require("./comment").schema;
var User = require("./user").schema;

 var ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: {type: User, required: true},
    likes: [String],
    comments: [Comment],
}, { timestamps: true });

module.exports = Article = mongoose.model('Article', ArticleSchema);

// let Article = module.exports = mongoose.model('Task', TaskSchema);
