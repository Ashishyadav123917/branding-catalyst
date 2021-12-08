const path= require('path')
const mongoose = require('mongoose');

const internSchema= new mongoose.Schema({
    username: {
        type: String,
    },
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    assigned:{
        type: String,
    },
    deadline:{
        type: String,
    },
    completed:{
        type: Boolean,
        default: false
    }
});

module.exports= mongoose.model('intern',internSchema);
