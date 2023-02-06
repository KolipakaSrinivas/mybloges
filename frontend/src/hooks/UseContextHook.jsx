import {WorkoutsContext} from '../context/blog-context'

import { useContext } from 'react'


export const useBlogContext = () =>{
    const context = useContext(WorkoutsContext)

    if(!context){
        // throw alert('error error ')
    }
    
    return context
}