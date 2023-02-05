import { createContext } from "react";



export const allBlogContext = createContext()


export const allBlogContexProvider = ({childen}) =>{
    return(
        <allBlogContext.Provider>
            {childen}
        </allBlogContext.Provider>
    )
}