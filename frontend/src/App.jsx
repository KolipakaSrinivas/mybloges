import './App.css'

import { Routes,Route } from 'react-router-dom'


// componets
import HomePage from './pages/Home-page.component'
import BlogPost from './components/BlogPost.component'
import Navbar from './components/Navbar/Navbar.component'




function App() {
  

  return (
    <div className="app">
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blog' element={<BlogPost/>}/>


        </Routes>
      </div>
    </div>
  )
}

export default App
