let mongoose = require('mongoose');
let Comment = require('../models/comment');



module.exports = {

addComment: function (req, res) {
    Comment.create({ commenter: req.body.commenter, comment: req.body.comment }, function (error, Comment) {
        if (error) {
            res.json({ message: "Error", error: error });
        }
        else {
            res.json({ message: "Success", added: true });
        }
    })
},


deleteComment: function (req, res) {
    Comment.remove({ _id: req.params.id }, function (error) {
        if (error) {
            res.json({ message: "Error", error: error });
        }
        else {
            res.json({ message: "Success", removed: true });
        }
    })
},


}