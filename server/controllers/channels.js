let mongoose = require('mongoose');
let Channel = require('../models/channel');
let User = require('../models/user');
let Article = require('../models/article');


module.exports = {

    index: function (req, res) {
        Channel.find()
            .then(channels => res.json(channels))
            .catch(err => res.json(err));
    },

    getChannel: function (req, res) {
        Channel.findOne({ _id: req.params.id }, function (error, channel) {
            if (error)
                res.json(error);
            else
                res.json(channel);
        })
    },

    addChannel: function (req, res) {
        Channel.create({ name: req.body.name, description: req.body.description, owner: req.body.owner, tags: req.body.tags }, function (error, channel) {
            if (error) {
                res.json({ message: "Error", error: error });
            }
            else {
                res.json({ message: "Success", added: true });
            }
        })
    },

    deleteChannel: function (req, res) {
        Channel.remove({ _id: req.params.id }, function (error) {
            if (error) {
                res.json({ message: "Error", error: error });
            }
            else {
                res.json({ message: "Success", removed: true });
            }
        })
    },
    editChannel: function (req, res) {
        Channel.updateOne({ _id: req.params.id }, {
            name: req.body.name,
            description: req.body.description,
            tags: req.body.tags
        })
            .then(data => {

                console.log('data done', req.body.name)
                res.json({ data: data });
            })
            .catch(err => {
                console.log("We have an error!", err);
                res.json(err);
            });
    },

    subscribeToChannel: function (req, res) {
        Channel.findOneAndUpdate({ _id: req.body.channel_id }, { $push: { subscribers: req.body.user_id } }, function (error) {
            if (error) {
                res.json({ message: "Error at channel update", error: error });
            }
            else {
                User.findOneAndUpdate({ _id: req.body.user_id }, { $push: { subscription: req.body.channel_id } }, function (error) {
                    if (error) {
                        res.json({ message: "Error user update", error: error });
                    }
                    else {

                        res.json({ message: "Success supscription", added: true });
                    }
                });
            }
        });
    },

    getSubChannels: function (req, res) {
        User.findOne({ _id: req.params.id }, function (error, user) {
            if (error) {
                res.json(error);
            }
            else {
                console.log(user.subscription);
                Channel.find({
                    "_id": {
                        "$in": [user.subscription]
                    }
                }).then(channels => res.json(channels))
                    .catch(err => res.json(err));
            }
        })
    },
    expChannel: function (req, res) {
        User.findOne({ _id: req.params.id }, function (error, user) {
            if (error) {
                res.json(error);
            }
            else {
                user_tags = user.tags;

                Channel.find(
                    { 'tags': { $in: user.tags } }
                    , function (error, channels) {
                        if (error) {
                            res.json(error);
                        }
                        else {
                            res.json(channels);
                        }
                    }
                )
            }
        }
        )
    },
    getUserArticles: function (req, res) {
        Article.find({"author._id": req.params.id }, function (error, articles) {
            if (error) {
                res.json(error);
            }
            else {
                res.json(articles);
            }
        })
    },

    filterChannels: function (req, res) {
        Channel.find(
            { 'tags': { $in: req.body.tags } }
            , function (error, channels) {
                if (error) {
                    res.json(error);
                }
                else {
                    res.json(channels);
                }
            }
        )
    }


}
