const router = require('express').Router();
const path= require('path')
const pricing= require('../models/pricing')
const logo= require('../models/logo')
const blog= require('../models/blog')
const client= require('../models/client')
const team= require('../models/team')
const portfolio= require('../models/portfolio')
const contact = require('../models/contact')
const intern = require('../models/intern')
var csv  = require('csv-express');
const attendance = require('../models/attendance');
const User = require('../models/user');

router.route('/client').post((req,res)=>{
    const clients= req.body;
    console.log(req.body);
    const newclient= new client(clients);
    newclient.save()
    .then(()=> res.json('New client Added!!!'))
    .catch(err => res.status(400).json(err))   
})

router.route('/updateTask/:id').post((req,res)=>{
    console.log(req.params.id)
    intern.updateOne({_id:req.params.id},{completed: true},(err)=>{
        if(!err){
            console.log("success!!!");
            res.send("success!!!")
        }
    })
     
})

router.route('/portfolio').post((req,res)=>{
    const portfolios= req.body;
    // console.log(req.body);
    const newportfolio= new portfolio(portfolios);
    newportfolio.save()
    .then(()=> res.json('New portfolio Added!!!'))
    .catch(err => res.status(400).json(err))   
})

router.route('/team').post((req,res)=>{
    const teams= req.body;
    // console.log(req.body);
    const newteam= new team(teams);
    newteam.save()
    .then(()=> res.json('New team Added!!!'))
    .catch(err => res.status(400).json(err))   
})

router.route('/team').get((req,res)=>{
    team.find()
    .then(teams => res.json(teams))
    .catch(err => res.status(400).json(err))
})

router.route('/portfolio').get((req,res)=>{
    portfolio.find()
    .then(portfolios => res.json(portfolios))
    .catch(err => res.status(400).json(err))
})

router.route('/clients/:id').get((req,res)=>{
    client.findOne({username: req.params.id})
    .then(clients => res.json(clients))
    .catch(err => res.status(400).json(err))
     
})

router.route('/update/:id').post((req,res)=>{
     const clients= req.params.id
     res.send(clients)   
})

router.route('/profile/update/:id').post((req,res)=>{
    client.findOne({username: req.params.id})
    .then(clients => res.json(clients))
    .catch(err => res.status(400).json(err))
     
})

router.route('/tasks').post((req,res)=>{
    // console.log(req.body)
    const tasks= req.body;
    const newtask= new intern(tasks);
    newtask.save()
    .then(()=> res.json('New task Added!!!'))
    .catch(err => res.status(400).json(err))   
     
})

router.route('/assignedTasks/:id').get((req,res)=>{
    // console.log(req.params.id)
    intern.find({username: req.params.id})
    .then(interns => res.json(interns))
    .catch(err => res.status(400).json(err))
     
})

router.route('/attendance/:id').get((req,res)=>{
    // console.log(req.params.id)
    attendance.find({username: req.params.id})
    .then(attendances => res.json(attendances))
    .catch(err => res.status(400).json(err))
     
})

router.route('/ttlAttendance/:id').get((req,res)=>{
    // console.log(req.params.id)
    User.findOne({username: req.params.id})
    .then(attendances => res.json(attendances.attendance))
    .catch(err => res.status(400).json(err))
     
})


router.route('/client/update').post((req,res)=>{
    console.log(req.body)
    client.findOneAndUpdate(req.body.id)
    .then(client=>{
        client.title= req.body.title,
        client.duration= req.body.duration,
        client.username= req.body.username,
        client.progress1= req.body.progress1,
        client.progress2= req.body.progress2,
        client.progress3= req.body.progress3,
        client.progress4= req.body.progress4
        
         client.save()
         .then(()=> res.json('client Updated!'))
         .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))

})

router.route('/plan').post((req,res)=>{
          const plans= req.body;
          const newplan= new pricing(plans);
          newplan.save()
          .then(()=> res.json('New Plan Added!!!'))
          .catch(err => res.status(400).json(err))   
})

router.route('/attendance').post((req,res)=>{
    const attendances= req.body;
    const newattendance= new attendance(attendances);
    newattendance.save()
    .then(()=> res.json('New Attendance Added!!!'))
    .catch(err => res.status(400).json(err))   
})

router.route('/logo').post((req,res)=>{
    const logos= req.body.selectedFile;
    const newlogo= new logo({
        logoName: logos
    }
    );
    newlogo.save()
    .then(()=> res.json('New Logo Added!!!'))
    .catch(err => res.status(400).json(err))   
})

router.route('/deleteLogo/:id').delete((req,res)=>{
    logo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Logo Deleted'))
    .catch(err => res.status(400).json(err))
})

router.route('/deletePortfolio/:id').delete((req,res)=>{
    portfolio.findByIdAndDelete(req.params.id)
    .then(() => res.json('Portfolio Deleted'))
    .catch(err => res.status(400).json(err))
})

router.route('/deleteTeam/:id').delete((req,res)=>{
    team.findByIdAndDelete(req.params.id)
    .then(() => res.json('Team Deleted'))
    .catch(err => res.status(400).json(err))
})

router.route('/deleteBlog/:id').delete((req,res)=>{
    blog.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blog Deleted'))
    .catch(err => res.status(400).json(err))
})

router.route('/deletePlan/:id').delete((req,res)=>{
    pricing.findByIdAndDelete(req.params.id)
    .then(() => res.json('Plan Deleted'))
    .catch(err => res.status(400).json(err))
})

router.route('/blog').get((req,res)=>{
    blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json(err))
})

router.route('/blog/edit/:id').get((req,res)=>{
    blog.findById(req.params.id)
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json(err))
})

router.route('/team/edit/:id').get((req,res)=>{
    team.findById(req.params.id)
    .then(teams => res.json(teams))
    .catch(err => res.status(400).json(err))
})

router.route('/portfolio/edit/:id').get((req,res)=>{
    portfolio.findById(req.params.id)
    .then(portfolios => res.json(portfolios))
    .catch(err => res.status(400).json(err))
})

router.route('/portfolio').get((req,res)=>{
    portfolio.find()
    .then(portfolios => res.json(portfolios))
    .catch(err => res.status(400).json(err))
})

router.route('/team/update/:id').post((req,res)=>{
    team.findById(req.params.id)
    .then(team=>{
        team.name= req.body.name,
        team.Link= req.body.Link,
        team.Image= req.body.Image
        
         team.save()
         .then(()=> res.json('team Updated!'))
         .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
})

router.route('/portfolio/update/:id').post((req,res)=>{
    portfolio.findById(req.params.id)
    .then(portfolio=>{
        portfolio.name= req.body.name,
        portfolio.Desc= req.body.Desc,
        portfolio.Image= req.body.Image
        
         portfolio.save()
         .then(()=> res.json('portfolio Updated!'))
         .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
})

router.route('/blog/update/:id').post((req,res)=>{
    blog.findById(req.params.id)
    .then(blog=>{
        blog.title= req.body.title,
        blog.category= req.body.category,
        blog.date= req.body.date,
        blog.author= req.body.author,
        blog.data1= req.body.data1,
        blog.data2= req.body.data2,
        blog.blogImage= req.body.blogImage
        
         blog.save()
         .then(()=> res.json('blog Updated!'))
         .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
})

router.route('/pricing').get((req,res)=>{
    pricing.find()
    .then(pricings => res.json(pricings))
    .catch(err => res.status(400).json(err))
})

router.route('/logo').get((req,res)=>{
    logo.find()
    .then(logos => res.json(logos))
    .catch(err => res.status(400).json(err))
})

router.route('/blog/:id').get((req,res)=>{
//    console.log(req.params.id)
   blog.findById(req.params.id)
   .then(blog => res.json(blog))
   .catch(err => res.status(400).json(err))
})

router.route('/blog').post((req,res)=>{
    // console.log(req.body)
    const blogs= req.body;
    const newblog= new blog(blogs );
    newblog.save()
    .then(()=> res.json('New Blog Added!!!'))
    .catch(err => res.status(400).json(err))   
})

module.exports= router