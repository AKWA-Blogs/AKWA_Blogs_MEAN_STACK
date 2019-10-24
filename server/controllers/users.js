let mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const emailRegex = require('email-regex');
let User = require('../models/user');
const jwt = require('jsonwebtoken');
let Channel = require('../models/channel');

module.exports = {
    // index: function (req, res) {
    //     if (!req.session.emailErr) {
    //         req.session.emailErr = "";
    //     }
    //     if (!req.session.fnameErr) {
    //         req.session.fnameErr = "";
    //     }
    //     if (!req.session.lnameErr) {
    //         req.session.lnameErr = "";
    //     }
    //     if (!req.session.passErr) {
    //         req.session.passErr = "";
    //     }
    //     res.locals.emailErr = req.session.emailErr;
    //     res.locals.fnameErr = req.session.fnameErr;
    //     res.locals.lnameErr = req.session.lnameErr;
    //     res.locals.passErr = req.session.passErr;
    // },

    index: function (req, res) {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.json(err));
    },

    getUser: function (req, res) {
        User.findOne({ _id: req.params.id }, function (error, article) {
            if (error)
                res.json(error);
            else
                res.json(article);
        })
    },

    addUser: function (req, res) {
        // Check for valid email
        var err = false;
        var validEmail = emailRegex({ exact: true }).test(req.body.email);
        if (!validEmail) {
            console.log('invlaid email');
            err = true;
        }

        if (req.body.first_name.length < 3) {
            console.log('invlid first name');
            err = true;

        }

        if (req.body.last_name.length < 3) {
            console.log('invlid last name');
            err = true;
        }

        if (req.body.password.length < 8) {
            console.log("password is too short");
            err = true;
        }

        if (!err) {
            bcrypt.hash(req.body.password, 10)
                .then(hashed_password => {
                    const user = new User({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: hashed_password,
                    });
                    // req.session.user_id = user._id;
                    // req.session.user_email = user.email;
                    user.save();
                    console.log('Token sent');
                    let token = jwt.sign({id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email}, "Oursecretword", { expiresIn: "2h" });
                    res.status(200).send({
                        token
                    });


                })
                .catch(error => {
                    console.log('error');
                    res.json(error);
                });
        }
        else {
            console.log("Error");
        }

    },

    editUser: function (req, res) {
        User.updateOne({ _id: req.params.id }, {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
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

    login: function (req, res) {
        User.findOne({ email: req.body.email }, function (error, user) {
            if (error) {
                console.log("Not regitered");
                res.json(error);
            }
            else {
                bcrypt.compare(req.body.password, user.password, function (err, valid) {
                    if (!valid) {
                        console.log('invalid password');
                        res.sendStatus(401);

                    } else {
                        console.log('password valid');
                        let token = jwt.sign({ user: user.email, id: user._id }, "ihtrfdftgyjuhkjlp;pkljkh", { expiresIn: "2h" });
                        res.status(200).send({
                            token
                        });

                    }
                });
            }
        });
    },
    deleteUser: function (req, res) {
        User.remove({ _id: req.params.id }, function (error) {
            if (error) {
                res.json({ message: "Error", error: error });
            }
            else {
                res.json({ message: "Success", removed: true });
            }
        })
    },

    getUsersChannels: function (req, res) {
        /* Channel.findOne()
            .then(channels => function(){
                console.log(channels)
                for(var i = 0; i < channels.length; i++){
                    if(channels[i].owner._id == req.params.id){
                      res.json(channels[i]._id);
                    }
                }
            })
            .catch(err => res.json(err));
    } */

    Channel.find({}, function (error, channels) {
        if (error)
            res.json("+++++++ ", error);
        else{
            for(var i = 0; i < channels.length; i++){
                if(channels[i].owner._id == req.params.id){
                  res.json(channels[i]);
                }
            }
        }
    })
}
}