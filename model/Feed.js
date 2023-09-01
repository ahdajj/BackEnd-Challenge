const mongoose = require('mongoose')
const moment= require('moment') 

const Schema = mongoose.Schema;

const feedSchema = new Schema({
       Name:{
        type:String ,
        required: true,
        maxlength: 15 
       },
       Message:{
        type:String ,
        required: true,
        maxlength: 100 
       },
       Create_at:{
        type:Date,
        default: Date.now,
        get : function(createAt){
          return moment(createAt).format('MMMM Do YYYY , h:mm:ss a')
          }
       }
}, {timestamps: true})

const feed = mongoose.model('Feed',feedSchema)
module.exports = feed