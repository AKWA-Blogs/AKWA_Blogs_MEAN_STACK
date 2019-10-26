var mongoose = require("mongoose");
var User = require("./user").schema;


var CommentSchema = new mongoose.Schema({
    commenter: { type: User, required: true },
    comment: { type: String, required: [true, "Comments must have content"], minlength: [3, "Comment must be of length 3 or more"] },
    article_id:{type: String, required:true},
}, { timestamps: true })

module.exports = Comment = mongoose.model('Comment', CommentSchema);
// let Comment = module.exports = mongoose.model('Comment', CommentSchema);
