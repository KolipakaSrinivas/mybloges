const express = require('express')


// inszation
const router = express.Router()



// GET ALL BLOGES
router.get('/',(req,res)=>{
    res.json({mesg:"ALL BLOGES"})
})


//  GET SINGLE BLOG
router.get('/:id',(req,res)=>{

    res.json({mesg:"SINGLE BLOGE"})
})


// POST NEW BLOG
router.post('/',(req,res)=>{

    res.json({mesg:"create new blog"})

})

//  deleate A blog
router.delete('/:id',(req,res)=>{

    res.json({mesg:"DELEAte BLOGES"})
})

 
//  UPDATAE blog
router.patch('/:id',(req,res)=>{
    res.json({mesg:"UPDATA BLOGES"})
})

module.exports = router