let mongoose = require('mongoose');
let Channel = require('../models/channel');


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
                console.log('data updated', data)
                res.json({ data: data });
            })
            .catch(err => {
                console.log("We have an error!", err);
                res.json(err);
            });
    },

}