import React, { Fragment,useState,useEffect } from 'react'



import BlogPost from '../components/BlogPost.component'
import BlogForm from '../components/BlogForm/BlogForm.component'


import {useBlogContext} from '../hooks/UseContextHook'

function Home() {

    const {workouts,dispatch}= useBlogContext()


    useEffect(()=>{

        const getBlogPost = async () => {

            const url ="http://localhost:4000/api/myblogs"

         const  response = await fetch(url)
         const json = await response.json()

         if(response.ok){
            dispatch({type:'SET_BLOG',payload:json})
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
                    {workouts && workouts.map(post=><BlogPost key={post._id} post={post}/>)}
                </div>
                <BlogForm/>
            </div>
        </Fragment>
    )
}


export default Home