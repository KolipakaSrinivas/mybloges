const express  = require('express')
const router = express.Router()

const {loginuser,signupuser} = require('../controllers/UserControler')

//  login
router.post('/login',loginuser)


signup
router.post('/signup',(req,res)=>{
    res.send("ssssssssssssss")
})


module.export = router
