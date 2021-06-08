const express = require('express');
const Homeitem = require('../models/home');

const router = express.Router();

router.get("/",function(req,res){
    Homeitem.find(function(err,foundItems){
        if(!err){
            res.status(200).json({
                items: foundItems
            })
        }
        else{
            res.status(404).json({
                error: err
            })
        }
    })
})


module.exports = router;