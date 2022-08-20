
const http = require('http')

const express = require('express')

const app = express()

app.use((req, res, next)=>{
    console.log('Hi I am Muzz')
    next()
})

app.use((req, res, next)=>{
    console.log('Hey It muzz again')
    res.send('<h1>Hi Muzz Here !!!')
})

app.listen(4000)

