import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import  useCurrentUser  from './customHooks/getCurrentUser.js';

function App() {
  useCurrentUser()
  return (
    <>
    <ToastContainer />
  
    <Routes>
      <Route path='/' element={<Home/>} />
        
     <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  )
}

export default App
