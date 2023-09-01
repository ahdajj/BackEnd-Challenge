const express = require('express')
require('./config/mongo')
const route = require('./config/route')
const app = express()



let port = 3000
app.listen(port , console.log('app is on'))

app.use(route)

app.set('view engine','ejs');  

app.use(express.static('public')) ;

