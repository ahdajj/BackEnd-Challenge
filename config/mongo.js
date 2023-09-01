
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://ahd:JnZoTn5lLZpOSWNa@cluster0.eh9taen.mongodb.net/Facebook?retryWrites=true&w=majority')
.then(()=>{
    console.log(' db is connected')
})
.catch((err)=>{
    console.log(err)
})

module.exports = mongoose