let mongoose = require('mongoose');
let Article = require('../models/article');



module.exports = {

    index: function (req, res) {
        Article.find()
            .then(articles => res.json(articles))
            .catch(err => res.json(err));
    },

    getArticle: function (req, res) {
        Article.findOne({ _id: req.params.id }, function (error, article) {
            if (error)
                res.json(error);
            else
                res.json(article);
        })
    },

    addArticle: function (req, res) {
        Article.create({ title: req.body.title, body: req.body.body }, function (error, article) {
            if (error) {
                res.json({ message: "Error", error: error });
            }
            else {
                res.json({ message: "Success", added: true });
            }
        })
    },

    deleteArticle: function (req, res) {
        Article.remove({ _id: req.params.id }, function (error) {
            if (error) {
                res.json({ message: "Error", error: error });
            }
            else {
                res.json({ message: "Success", removed: true });
            }
        })
    }

}