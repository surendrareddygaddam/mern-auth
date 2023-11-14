import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Singin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import About from './pages/About'
export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/sing-in' element={<Singin/>}/>
    <Route path='/sign-up' element={<Signup/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
}
