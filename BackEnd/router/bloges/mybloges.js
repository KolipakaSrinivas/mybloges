const express = require('express')

const {
    createBlogpost,
    getAllBlogPost,
    getBlogPostById,
    deleteBlogoPost,
    updateBlogPost
} = require('../../controllers/blogPostControllers')



const router = express.Router()



// GET ALL BLOGES
router.get('/',getAllBlogPost)


//  GET SINGLE BLOG
router.get('/:_id',getBlogPostById)


// POST NEW BLOG
router.post('/',createBlogpost)



//  deleate A blog
router.delete('/:id',deleteBlogoPost)

 
//  UPDATAE blog
router.patch('/:id',updateBlogPost)

module.exports = router