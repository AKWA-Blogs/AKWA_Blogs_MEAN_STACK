var express = require("express");
var app = express();
var mongoose = require("mongoose");

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect("mongodb+srv://AKWA-SITE:codingdojo2019@akwa-h0aa7.mongodb.net/akwa_db", {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;


// Check Database connection
db.once('open', function () {
    console.log("Connected to mongoDB. ");
});


// check Database errors
db.on('error', function (err) {
    console.log(err);
});

require('./server/config/routes.js')(app);


app.listen(8000, function(){
    console.log("Listening on port: 8000");
})