const path= require('path')
const mongoose = require('mongoose');

const portfolioSchema= new mongoose.Schema({
    name:{
        type: String,
    },
    Desc:{
        type: String,
    },
    Image:{
        type: String,
    }

});

module.exports= mongoose.model('portfolio',portfolioSchema);
