var mongoose = require("mongoose");
const comment = {};


comment.CommentSchema = new mongoose.Schema({
    // commenter: { type: Schema.Types.ObjectId, ref: 'User' },
    comment: { type: String, required: [true, "Comments must have content"], minlength: [3, "Comment must be of length 3 or more"] },
}, { timestamps: true })

module.exports = comment;

// let Comment = module.exports = mongoose.model('Comment', CommentSchema);
