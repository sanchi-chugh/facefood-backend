const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const homeroutes = require('./routes/home');

const app = express();


app.use(express.static("public"));

app.use(cors());

mongoose.connect("mongodb://localhost:27017/facefood",{useNewUrlParser: true});

app.get("/",homeroutes
);

app.listen("3000",function(){
    console.log("server started on port: 3000");
});