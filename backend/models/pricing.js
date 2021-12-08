const path= require('path')
const cors = require("cors")
const mongoose = require('mongoose');

const pricingSchema= new mongoose.Schema({
    name:{
        type: String,
    },
    price:{
        type: Number,
    },
    plan1:{
        type: String,
    },
    plan2:{
        type: String 
    },
    plan3:{
        type: String,
    },
    plan4:{
        type: String,
    },
    plan5:{
        type: String,
    }

});

module.exports= mongoose.model('pricing',pricingSchema);
