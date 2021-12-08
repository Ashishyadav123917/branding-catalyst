const path= require('path')
const cors = require("cors")
const mongoose = require('mongoose');

const contactSchema= new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    subject:{
        type: String,
    },
    message:{
        type: String 
    },
    date: {
        type: String

    }

});

module.exports= mongoose.model('contact',contactSchema);
