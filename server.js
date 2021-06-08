const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const expressJwt = require("express-jwt");
require('dotenv').config();

//jsw middleware
app.use('/api', expressJwt({ secret: process.env.SECRET,  algorithms: ['HS256'] }));

//Routes
const homeroutes = require('./routes/home');

//Database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected'));

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(cors());


app.get("/",homeroutes);
app.use("/auth",require("./routes/auth"));

//error through middleware
app.use((err, req, res, next) => {
    console.error(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message })
})

const port = process.env.PORT || 8000;

app.listen(port,function(){
    console.log(`server has started on port ${port}`);
});