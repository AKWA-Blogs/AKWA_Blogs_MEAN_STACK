var mongoose = require("mongoose");


var CommentSchema = new mongoose.Schema({
    commenter: { type: String, required:  [true, "Enter commenter"] },
    comment: { type: String, required: [true, "Comments must have content"], minlength: [3, "Comment must be of length 3 or more"] },
    article_id:{type: String, required:[true, "Enter Article ID"]},
}, { timestamps: true })

module.exports = Comment = mongoose.model('Comment', CommentSchema);
// let Comment = module.exports = mongoose.model('Comment', CommentSchema);
