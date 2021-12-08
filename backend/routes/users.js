const router = require('express').Router();
const express = require('express');
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/user');
const path= require('path')
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const session = require('express-session');
const contact = require('../models/contact')
const csv= require("csv-express")
const bcrypt = require('bcrypt');


var rand=0
function setRandom(){
    return rand= (Math.ceil(9997 + 3+ Math.random() * 9000)).toString();
}

setRandom(3);
setInterval(setRandom, 600000);

const signToken = userID =>{
  return JWT.sign({
      iss : "NoobCoder",
      sub : userID
  },"NoobCoder",{expiresIn : "1h"});
}
router.route('/interns').get((req,res)=>{
  User.find({role: 'intern'})
  .then(found=> res.json(found))
  .catch(err=> res.status(400).json(err))

})



// app.post("/register", function(req, res){
  
  
//     //end of mail section
//     User.register({username: req.body.username}, req.body.password, function(err, user){
//       if (err) {
//         // console.log(err);
//         res.redirect("/login");
//       } else {
//         passport.authenticate("local")(req, res, function(){
//           res.redirect("/");
//         });
//       }
//     });
//   });


router.post('/register',(req,res)=>{
  console.log(req.body);
  const username= req.body.username;
  const name= req.body.name;
  const password= req.body.password1;
  const role= req.body.role;
  if(req.body.password1==req.body.password2){
  User.findOne({username},(err,user)=>{
      if(err)
          res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
      if(user)
          res.status(400).json({message : {msgBody : "Username is already taken", msgError: true}});
      else{
          
              //sending mail to the User
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: "anujdubey0298@gmail.com",
          pass: "@Anuj@Dubey@123"
      }
  });
  var mailOptions,link;
    host=req.get('host');
    link="http://"+req.get('host')+"/users/verify?id="+rand+"&gmail="+req.body.username;
    mailOptions={
      to : req.body.username,
      subject : "Confirm your email address",
      html : `<h3 style="font-family:sans-serif; ">Welcome to BrandingCatalyst,</h3><p style="font-family:sans-serif; ">You're receiving this message because you recently signed up for a account.</p><p style="font-family:sans-serif; ">Confirm your email address by clicking on the button below.This step adds extra security to your account by verifying you own this email.</p><a href="${link}" style="padding: 8px 14px;border:1px solid black;color:white;font-weight:500;background-color: black;text-decoration: none;border-radius:5px;margin-bottom: 15px;">Confirm email</a><br><p style="font-family:sans-serif; border-top: 1px solid black;border-bottom: 1px solid black;padding: 20px 0px;margin: 20px 0px;"> This link will expire in 5 minutes.</p> <small style="float:right;">© 2020 All Rights Reserved.</small>`
    }
    // console.log(mailOptions);
    transporter.sendMail(mailOptions, function(error, response){
       if(error){
            console.log(error);
            
     }
  });         
   const newUser = new User({username,password,name,role});
          newUser.save(err=>{
              if(err)
                  res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
              else
                  res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}});
          });
      }
  });
  }
  else{
    res.send("Passwords don't match!!!")
  }

});

router.get('/verify',function(req,res){
  const  url = (req.url).split("=");
  // console.log(url);
  const usrname= url[2];
  // console.log(usrname);
  if(true){
    if(req.query.id==rand){
      User.updateOne({username: usrname},{confirmed: true},(err)=>{
        if(!err){
         // console.log("email is verified");
          res.send("Email is verified!!!");
       }
      })
    }
    else
    {
      // console.log("email is not verified");
      res.send("email verification failed");
    }
  }
  else
  {
    res.send("<h1>Request is from unknown source");
  }
  });

 router.post("/femail",(req,res)=>{
   console.log(req.body)
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "anujdubey0298@gmail.com",
        pass: "@Anuj@Dubey@123"
    }
 });
 var mailOptions,link;
 
  host=req.get('host');
  link="http://"+req.get('host')+"/users/verification?id="+rand+"&gmail="+req.body.username;
  mailOptions={
    to : req.body.username,
    subject : "Password reset link",
    html : `<h3 style="font-family:sans-serif; ">Welcome to abc.</h3><p style="font-family:sans-serif; ">You're receiving this message because you recently requested for a reset password for your COMPANYNAME account.</p><p style="font-family:sans-serif; ">To reset your password click on the button below.</p><a href="${link}" style="padding: 8px 14px;border:1px solid black;color:white;font-weight:500;background-color: black;text-decoration: none;border-radius:5px;margin-bottom: 15px;">Reset Password</a><br><p style="font-family:sans-serif; border-top: 1px solid black;border-bottom: 1px solid black;padding: 20px 0px;margin: 20px 0px;"> This link will expire in 5 minutes.</p> <small style="float:right;">© 2020  All Rights Reserved.</small>`
  }
  // console.log(mailOptions);
  transporter.sendMail(mailOptions, function(error, response){
     if(!error){;
             res.send("Success!!!")
       }
 });

})

router.get("/verification",(req,res)=>{
  // console.log(req.query.id);
// console.log(rand);
// console.log(req.protocol+"://"+req.get('host'));
const  url = (req.url).split("=");
// console.log(url);
const usrname= url[2];
// console.log(usrname);

if(true)
{
  // console.log("Domain is matched. Information is from Authentic email");
  if(req.query.id==rand)
  {
    User.updateOne({username: usrname},{confirmed: true},(err)=>{
      if(err){
          console.log(err)
      }
      else
      {
        // res.send("email is verified");
        
    res.redirect("http://localhost:3000/reset-password/"+usrname);
      }
    })

  }
  else
  {
    res.send("email verification failed!!!");

  }
}
else
{
  res.end("<h1>Request is from unknown source");
}

})

router.post("/resetPassword",(req,res)=>{
  console.log(req.body)
  if(req.body.password1==req.body.password2){
    bcrypt.hash(req.body.password1,10,(err,passwordHash)=>{
      if(!err){
        console.log(passwordHash)
        User.updateOne({username: req.body.username},{password: passwordHash},(err)=>{
          if(!err){
            console.log("password updated!!!");
         
            
        //sending mail to the User
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "anujdubey0298@gmail.com",
        pass: "@Anuj@Dubey@123"
    }
});
var mailOptions;
  mailOptions={
    to : req.body.username,
    subject : "Password Changed!!!",
    html : `<p>Hello ${req.body.username}</p>
    <p>Your Password Changed Successfully!!!</p>`
  }
  // console.log(mailOptions);
  transporter.sendMail(mailOptions, function(error, response){
     if(error){
          console.log(error);
   }
});

//end of mail section
res.send("updated")


          }
        })
      }
    })
  
  }
})

router.post("/forget-pass-reset",(req,res)=>{
  // console.log(req.body.username);
    if(req.body.pass1 == req.body.pass2){

User.findOne({username: req.body.username },function(err,found){
      if(err){
         // console.log(err)
         res.render(__dirname+ "/views/500")
      }
      else{
     // console.log(found)
     User.findById(found._id, function(err, user) {
    user.setPassword(req.body.pass1, function(err) {
        if (err){
           // console.log(err)
           res.render(__dirname+ "/views/500")
        }
        user.save(function(err) {
            if (err){
               // console.log(err)
               res.render(__dirname+ "/views/500")
            } else{

                 // console.log("password changed Successfully");
            res.redirect("/login");
            }
        });
    });
});
         }
    });

}
else{
  res.redirect("/forget-pass-reset");
}
});






router.post('/login',passport.authenticate('local',{session : false}),(req,res)=>{
  if(req.isAuthenticated()){
     const {_id,username,role} = req.user;
     const token = signToken(_id);
     res.cookie('access_token',token); 
     res.status(200).json({isAuthenticated : true,user : {username,role}});
  }
});


router.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
  res.clearCookie('access_token');
  res.json({user:{username : "", role : ""},success : true});
});

router.get('/admin',passport.authenticate('jwt',{session : false}),(req,res)=>{
  if(req.user.role === 'admin'){
      res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
  }
  else
      res.status(403).json({message : {msgBody : "You're not an admin,go away", msgError : true}});
});

router.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
  const {username,role,name} = req.user;
  res.status(200).json({isAuthenticated : true, user : {username,role,name}});
});


router.route('/contact').get((req,res)=>{
  contact.find()
  .then(contacts => res.json(contacts))
  .catch(err => res.status(400).json(err))
})

router.route('/ttlAttendance/:id').get((req,res)=>{
  User.findOne({username: req.params.id})
  .then(users => res.json(users.attendance))
  .catch(err => res.status(400).json(err))
})

router.route('/clients').get((req,res)=>{
  User.find({role: 'client'})
  .then(found=> res.json(found))
  .catch(err=> res.status(400).json(err))

})

router.route('/contact').post((req,res)=>{
  console.log(req.body)
    const name = req.body.name;
    const  email= req.body.email;
    const  subject= req.body.subject;
    const  message= req.body.message;
    const dt= new Date();
    const date= dt.toDateString();
  

        //sending mail to the User
  var transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
              user: "anujdubey0298@gmail.com",
              pass: "@Anuj@Dubey@123"
          }
      });
      var mailOptions;
        mailOptions={
          to : "anujdubey02098@gmail.com",
          subject : "New Message/Query",
          html : `<p><b>Name:</b>${name}</p>
          <p><b>Email:</b>${email}</p>
          <p><b>Subject:</b>${subject}</p>
          <p><b>Message:</b>${message}</p>`
        }
        // console.log(mailOptions);
        transporter.sendMail(mailOptions, function(error, response){
           if(error){
                console.log(error);
         }
      });
    
      //end of mail section

    const newContact= new contact({name,
    email,
    subject,
    message,
    date
    });
    newContact.save()
    .then(()=> res.json('New Query Added!!!'))
    .catch(err => res.status(400).json(err))
  
})


module.exports= router