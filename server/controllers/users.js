let mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const emailRegex = require('email-regex');
let User = require('../models/user');

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
                    res.json(user);

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

}