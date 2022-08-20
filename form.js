
const http = require('http')

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())

app.use('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="quantity"><button type="submit">Add Product</button></form>')
    
})

app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req, res, next)=>{
    res.send('<h1>Hello from Express')
})

app.listen(4000)

