import React, { Fragment,useEffect,useState } from 'react'

// import axios from 'axios'

function BlogPost() {


const [blogPost,setblogPost] = useState(undefined)


    useEffect(()=>{

        const getBlogPost = async () => {

            const url ="http://localhost:4000/api/myblogs"

         const  response = await fetch(url)
         const json = await  response.json()

         if(response.ok){
            setblogPost(json)
         }else{
            console.log("Not Ok")
         }
            
        } 
         
        
        getBlogPost()
    },[])

    
    console.log(blogPost)


    return(
        <Fragment>
            <div className="header">

                {
                    blogPost && blogPost.map(item=><h1 key={item._id}>{item.title}</h1>)
                }



            </div>
        </Fragment>
    )
}


export default BlogPost