// import { createContext, useReducer } from "react";






// export const allBlogContext = createContext()


// export const blogReducer  = (state,action) => {
//     switch(action.type) {
        
//         case 'SET_BLOG' : 
        
//         return {
//             blog : action.payload
//         }
        
//         case 'CREATE_BLOG' :
//             return {
//                 blog : [action.payload,...state.blog]
//             }
            
//             default : 
//             return state
            
//         }
        
//     }
    
    
//     export const allBlogContexProvider = ({childen}) =>{
//     const [state,dispatch] = useReducer(blogReducer,{
//         blog:null
//     })

//     return(
//         <allBlogContext.Provider value={{...state,dispatch}}>
//             {childen}
//         </allBlogContext.Provider>
//     )
// }


import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        workouts: action.payload 
      }
    case 'CREATE_WORKOUT':
      return { 
        workouts: [action.payload, ...state.workouts] 
      }
    default:
      return state
  }
}

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { 
    workouts: null
  })
  
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}