
import './App.css'
import Index from './pages/index'
import About from './pages/about'
import Project from './pages/project'
import Contact from './pages/contact'
import Error from './pages/error'
import {Route , Routes ,Link} from 'react-router-dom'
function App() {
  return (
    <>
      <nav className='navbar'>
        <div className="header">
          <Link className='logo' to={'/'}>SURENDHAR.dev</Link>
          <div className="links">
            <Link className='link' to={'/about'}>Resume</Link>
            <Link className='link' to={'/project'}>Project</Link>
            <Link className='link' to={'/contact'}>Contact Me</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </>
  )
}

export default App
