const express = require('express')

const port = process.env.port || 5000

const app = express()

app.listen(port)

app.get("/",(req,res)=>{
    res.status(200).send({hi:"there"})
})