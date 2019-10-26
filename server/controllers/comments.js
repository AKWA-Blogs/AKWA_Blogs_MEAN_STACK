let mongoose = require('mongoose');
let Comment = require('../models/comment');



module.exports = {

    getComment: function (req, res) {
        Comment.find({ article_id: req.params.id })
            .then(comments => res.json(comments))
            .catch(err => res.json(err));
    },

    addComment: function (req, res) {
        Comment.create({ commenter: req.body.commenter, comment: req.body.comment ,article_id: req.body.article_id }, function (error, Comment) {
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