const path= require('path')
const mongoose = require('mongoose');

const logoSchema= new mongoose.Schema({
    logoName:{
        type: String
    }
});

module.exports= mongoose.model('logo',logoSchema);
