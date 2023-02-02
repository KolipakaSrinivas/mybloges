import './App.css'

import { Routes,Route } from 'react-router-dom'


// componets
import HomePage from './pages/Home-page.component'
import BlogPost from './components/BlogPost.component'


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blog' element={<BlogPost/>}/>


      </Routes>
    </div>
  )
}

export default App
