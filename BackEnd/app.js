const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

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



// // counting To db
// mongoose.set('strictQuery', true);

// mongoose.connect(process.env.MONG_URI)
// .then(()=>{

//     app.listen(process.env.PORT,()=>{
//         console.log("Server is running on port",process.env.PORT)
//     })

// }).catch((err)=>{
//     console.log(err)
// })




mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/myblogs')
.then(()=>{

    app.listen(4000,()=>{
        console.log("Server is running on port",4000)
    })

}).catch((err)=>{
    console.log(err)
})
