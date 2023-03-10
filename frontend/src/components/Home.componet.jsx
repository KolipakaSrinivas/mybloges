import React, { Fragment,useState,useEffect } from 'react'



import BlogPost from '../components/BlogPost.component'
import BlogForm from '../components/BlogForm/BlogForm.component'




function Home() {

    const [blogposts,setBlogposts] = useState(null) 

    


    useEffect(()=>{

        const getBlogPost = async () => {

            const url ="http://localhost:4000/api/myblogs"

         const  response = await fetch(url)
         const json = await response.json()

         if(response.ok){
            setBlogposts(json)
         }else{
            console.log("Not Ok")
         }
            
        } 
         
        
        getBlogPost()
    },[])



    return(
        <Fragment>
            <div className='home'>
                <div className='workouts'>
                    {blogposts && blogposts.map(post=><BlogPost key={post._id} post={post}/>)}
                </div>
                <BlogForm />
            </div>
        </Fragment>
    )
}


export default Home