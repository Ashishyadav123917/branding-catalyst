const path= require('path')
const mongoose = require('mongoose');

const attendanceSchema= new mongoose.Schema({
    name:{
        type: String,
    },
    username:{
        type: String,
    },
    date:{
        type: String,
    },
    verify:{
        type: Boolean,
        default: false
    }

});

module.exports= mongoose.model('attendance',attendanceSchema);
