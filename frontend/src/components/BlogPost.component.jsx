import React, { Fragment } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';




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
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <p style={{color:"blue"}}>{post.createdAt}</p>
            <span onClick={()=>deletepost(post._id)}><DeleteIcon/></span>
            </div>
        </Fragment>
    )
}


export default BlogPost