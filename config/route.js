const express = require('express')
const Feed = require('../model/Feed')
const routes = express.Router() 


routes.use(express.urlencoded({extended:true}))

routes.get('/',(req,res)=>{
    res.redirect('/feed')
})

routes.get('/feed', (req,res)=>{
    Feed.find()
    .sort({Create_at : -1})
    .then(data => {
           res.render('index' , {feeds:data})
    })
    .catch(err =>{
        console.log(err)
    })
})

routes.get('/feed/:id', (req,res)=>{
    const id = req.params.id
    Feed.findById(id)
    .then(data=>{
        res.render('display', {feeds:data})
    })
    .catch(err =>{
        console.log(err)
    })
    
})

routes.get('/feed/edit/:id',(req,res)=>{
    const id= req.params.id
    Feed.findById(id)
    .then(data=>{
        res.render('edit',{feeds:data})
    })
})

routes.post('/feed' , (req,res)=>{
    const Newfeed = new Feed(req.body)
    Newfeed.save()
    .then(()=>{
        res.redirect('/feed')
    })
    .catch(err =>{
        console.log(err)
    })
})

routes.post('/feed/edit/:id', (req,res)=>{
    const id = req.params.id
    Feed.findByIdAndUpdate(id , req.body)
    .then(()=>{
        res.redirect('/feed')
    })
    .catch(err=>{
        console.log(err)
    })
})


routes.delete('/feed/:id', (req,res)=>{
    const id = req.params.id;
    Feed.findByIdAndDelete(id)
     .then(result=>{                  
        res.json({redirect:'/feed'})
     })
     .catch(err => {
        console.log(err)
     })
})

module.exports=routes