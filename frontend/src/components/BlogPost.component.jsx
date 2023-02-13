import React, { Fragment } from 'react'
import './BlogPost.css'




function BlogPost({post}) {

    const deletepost = async  (id) =>{
        const url = "http://localhost:4000/api/myblogs/"
       const response = await fetch(url+id,{
            method:"DELETE"
        })

        const json = await response.json()

        const {title} = json
    
        if(response.ok){        
            alert(`you went delete ${title} post`)
            window.location.reload()
        }


    }
    
    return(
        <Fragment>
            <div className='workout-details'>
            <h4>{post.title.toUpperCase()}</h4>
            <p>{post.body}</p>
            <p style={{color:"blue"}}>{post.createdAt}</p>
            <span onClick={()=>deletepost(post._id)}><span className="material-symbols-outlined">delete</span></span>
            </div>
        </Fragment>
    )
}


export default BlogPost