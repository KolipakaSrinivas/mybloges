const express = require('express')
require('dotenv').config()


const postingrouters = require('./router/bloges/mybloges')

// express APP
const app = express()

app.use(express.json())



app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})



// routes
app.get('/',(req,res)=>{
    res.json({"mesg":"Welcome to world"})
})

app.use('/api/myblogs', postingrouters)



app.listen(process.env.PORT,()=>{
    console.log("Server is running on port",process.env.PORT)
})

