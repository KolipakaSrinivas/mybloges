import React, { Fragment } from 'react'






function BlogPost({post}) {

    return(
        <Fragment>
            <div className='workout-details'>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            </div>
        </Fragment>
    )
}


export default BlogPost