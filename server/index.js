const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users.js");

mongoose.connect("mongodb+srv://tla2020:Learn2019@cluster0.fv0rv.mongodb.net/merntutorial?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
});

app.listen(3001, () => {

});