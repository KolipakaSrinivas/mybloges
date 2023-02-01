const express = require('express')

const {createBlogpost,getAllBlogPost} = require('../../controllers/blogPostControllers')




// inszation
const router = express.Router()



// GET ALL BLOGES
router.get('/',getAllBlogPost)


//  GET SINGLE BLOG
router.get('/:id',(req,res)=>{

    res.json({mesg:"SINGLE BLOGE"})
})


// POST NEW BLOG
router.post('/',createBlogpost)

//  deleate A blog
router.delete('/:id',(req,res)=>{

    res.json({mesg:"DELEAte BLOGES"})
})

 
//  UPDATAE blog
router.patch('/:id',(req,res)=>{
    res.json({mesg:"UPDATA BLOGES"})
})

module.exports = router