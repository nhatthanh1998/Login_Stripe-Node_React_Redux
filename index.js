const express = require('express')
const PORT = process.env.PORT || 5000
const app  = express()
app.get("/", (req,res)=>{
    res.status(200).send({hi:"there"})
})

app.listen(PORT)
