const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tla2020:Learn2019@cluster0.fv0rv.mongodb.net/merntutorial?retryWrites=true&w=majority")


app.listen(3001, () => {

});