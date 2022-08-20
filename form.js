
const http = require('http')

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const adminRoute = require('./routes/admin.js')

const shopRoute = require('./routes/shop.js')

app.use(bodyParser.urlencoded())

app.use(adminRoute)

app.use(shopRoute)

app.use('/',(req,res,next)=>{
    res.status(404).send('<h1>Page not Found</h1>')
})
app.listen(4000)

