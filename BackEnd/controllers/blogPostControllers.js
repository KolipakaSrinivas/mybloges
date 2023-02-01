const BlogPost = require('../Models/BlogpostModel')






/*-------------------------------  get a all BlogPost------------------------   */

const getAllBlogPost = async (req,res) => {
    try{

        const blogpostAll = await BlogPost.find({}).sort({createdAt:-1})
        res.status(200).json(blogpostAll)

    }catch(err){

        res.status(400).json({err})

    }
}










/*-------------------------------  get a single BlogPost------------------------   */


const createBlogpost =  async (req,res) => {

    const {title,body} = req.body

    try{
        const blogbost = await BlogPost.create({title,body})
        res.status(200).json(blogbost)

    }catch(err){
        res.status(400).json(err)

    }

}








/*-------------------------------  create a new BlogPost------------------------   */







/*-------------------------------  delete a BlogPost------------------------   */

















/*-------------------------------  updata a  BlogPost------------------------   */




module.exports = {
    createBlogpost,
    getAllBlogPost
}
