const BlogPost = require('../Models/BlogpostModel')
const mongoose = require('mongoose')






/*-------------------------------  get a all BlogPost------------------------   */
const getAllBlogPost = async (req,res) => {
    try{

        const blogpostAll = await BlogPost.find({}).sort({createdAt:-1})
        res.status(200).json(blogpostAll)

    }catch(err){

        res.status(400).json({err})

    }
}
/*-------------------------------  get a all BlogPost End ------------------------   */




/*-------------------------------  get a single BlogPost By id------------------------   */
const getBlogPostById  = async (req,res) =>{

    const {_id} = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)){

        return res.status(400).json({err:"no seach blogs"})

    }

    const   blogPost  = await BlogPost.findById(_id)
    if(!blogPost){
        return res.status(400).json({err:"no blog post by id"})
    }

    res.status(200).json(blogPost)


}
/*-------------------------------  get a single BlogPost By id End ------------------------   */




/*-------------------------------  create a new BlogPost------------------------   */
const createBlogpost =  async (req,res) => {

    const {title,body} = req.body

    try{
        const blogbost = await BlogPost.create({title,body})
        res.status(200).json(blogbost)

    }catch(err){
        res.status(400).json({err:err})

    }

}
/*-------------------------------  create a new BlogPost End ------------------------   */




/*-------------------------------  delete a BlogPost------------------------   */

const deleteBlogoPost = async (req,res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(400).json({err:"no seach blogs"})
    }

    const   blogPost  = await BlogPost.findByIdAndDelete({_id:id})

    res.status(200).json(blogPost)


}
/*-------------------------------  delete a BlogPost End ------------------------   */





/*-------------------------------  updata a  BlogPost------------------------   */
const updateBlogPost = async (req,res) => {

    const {id} = req.params
    

    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(400).json({err:"no seach blogs"})
    }

    const   blogPost  = await BlogPost.findByIdAndUpdate({_id:id},{
        ...req.body
    })

    if(!blogPost){
        return res.status(400).json({err:"no blog post by id"})
    }

    res.status(200).json(blogPost)


}
/*-------------------------------  updata a  BlogPost  End  ------------------------   */






module.exports = {
    createBlogpost,
    getAllBlogPost,
    getBlogPostById,
    deleteBlogoPost,
    updateBlogPost
}
