const path= require('path')
const cors = require("cors")
const mongoose = require('mongoose');

const clientSchema= new mongoose.Schema({
    title:{
        type: String,
    },
    duration:{
        type: Number,
    },
    username:{
        type: String,
    },
    progress1:{
        type: Number
    },
    progress2:{
        type: Number
    },
    progress3:{
        type: Number
    },
    progress4:{
        type: Number
    }

});

module.exports= mongoose.model('client',clientSchema);
