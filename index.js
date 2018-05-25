const express = require('express')
const port = process.env.PORT || 5000
const app  = express()
app.get("/", (req,res)=>{
    res.status(200).send({hi:"there"})
})
