import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword";
import { ToastContainer } from "react-toastify";
import useCurrentUser from "./customHooks/getCurrentUser.js";
import { useSelector } from "react-redux";

function App() {
  useCurrentUser()
  const {userData} = useSelector((state) => state.user)
  return (
    <>
    <ToastContainer />
  
    <Routes>
      <Route path='/' element={<Home/>} />
        
     <Route path='/signup' element={!userData ? <SignUp/> : <Navigate to="/" />} />
          <Route path='/login' element={<Login/>} />
           <Route path='/profile' element={userData ? <Profile/> : <Navigate to="/signup" />} />
   
    <Route path='/forget-password' element={<ForgetPassword/>} />

    </Routes>
    </>
  )
}

export default App
