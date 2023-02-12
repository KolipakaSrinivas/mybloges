import React, { Fragment, useState } from "react";



function BlogForm () {



    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [error,setError] = useState(null)

    const handsumbit = async (e) =>{
        e.preventDefault()

        const url = 'http://localhost:4000/api/myblogs'

        const newBlog = {title,body}
        const response = await fetch(url,{
            method:'POST',
            body:JSON.stringify(newBlog),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json =await response.json()

        if(!response.ok){
            setError(json.error)
        }if(response.ok){
            setTitle('')
            setBody('')
            setError(null)
            console.log('new form submit')
            window.location.reload()

        }

    }

    return(
        <Fragment>
            <form className="create" onSubmit={handsumbit}>
                <h2>Add a New Blog</h2>


                <label>Blog Title:</label>
                <input
                onChange={e=>setTitle(e.target.value)}
                value={title}
                />

                <label>BlogBody:</label>
                <input
                onChange={e=>setBody(e.target.value)}
                value={body}
                />
                <button>add</button>
                {error && <div className="error">{error}</div>}

            </form>

        </Fragment>
    )
}

export default BlogForm