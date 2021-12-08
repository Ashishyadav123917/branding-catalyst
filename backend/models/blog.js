const path= require('path')
const cors = require("cors")
const mongoose = require('mongoose');

const blogSchema= new mongoose.Schema({
    title:{
        type: String,
    },
    category:{
        type: String,
    },
    date:{
        type: String,
    },
    author:{
        type: String,
    },
    data1:{
        type: String 
    },
    data2:{
        type: String,
    },
    blogImage:{
        type: String,
    }

});

module.exports= mongoose.model('blog',blogSchema);
