require('dotenv').config();
const express= require('express');
const mongoose=require('mongoose')
const path= require('path')
const session = require('express-session');
const nodemailer = require('nodemailer');
const passport = require("passport");
const cors= require("cors")
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');
const bodyParser= require('body-parser')
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const multer= require('multer')
const router = express.Router();
const logo= require('./models/logo')
const User= require('./models/user')
const attendance= require('./models/attendance')

const app= express()
const port= process.env.PORT || 5000;


app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true
  })
);



mongoose.connect("mongodb://localhost:27017/brandingDB", {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);



//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------


const adminRouter= require('./routes/admin')
const usersRouter= require('./routes/users')

app.use('/admin',adminRouter)
app.use('/users',usersRouter)

app.post("/updateAttendance/:id",(req,res)=>{
  console.log(req.params.id);
  attendance.findOne({_id: req.params.id},(err,found)=>{
    if(err){
      console.log(err)
    }
    else
    {
      User.findOne({username: found.username},(errr,foundUser)=>{
        if(errr){
          console.log(errr)
        }
        else
        {
          // console.log(foundUser.attendance)
          let ttl = Number(foundUser.attendance)+ 1;
          User.updateOne({username: foundUser.username},{attendance: ttl},(error)=>{
            if(!error){
              // console.log("Updated")
              attendance.deleteOne({_id: req.params.id},(err1)=>{
                if(!err1){
                  res.send("Updated")
                }
              })
            }


          })
        }
      })
    }
  })
})


  //Start Server
  app.listen(port, () => {
    console.log("Server Has Started");
  });
  