import React, { useState } from 'react';
import logo from '../assets/logo.png';
import images from '../assets/images.jpg';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { server } from '../config';

function Login() {

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post(
        server + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      console.log(result.data);
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
   <div className='bg-[#dddbdb] w-screen h-screen flex items-center justify-center'>
  
        <form className='rounded-2xl w-[90%] max-w-4xl bg-white shadow-xl flex overflow-hidden' onSubmit={(e)=>e.preventDefault}>
  
          {/* LEFT SIDE */}
          <div className='w-full md:w-1/2 p-8 flex flex-col justify-center gap-4'>
  
            {/* Heading */}
            <div className='mb-2'>
              <h1 className='text-2xl font-semibold'>Welcome Back Dude!</h1>
              <h2 className='text-sm text-gray-500'>Sign In to Your Account</h2>
            </div>
  
          
  
            {/* Email */}
            <div className='flex flex-col gap-1'>
              <label className='font-semibold'>Email</label>
              <input
                type="email"
                placeholder='Enter your email'
                className='border border-gray-300 rounded-lg px-4 h-10 outline-none focus:border-green-700'
                onChange={(e)=>setEmail(e.target.value)} value={email}/>            </div>
  
            {/* Password */}
            <div className='flex flex-col gap-1 relative'>
              <label className='font-semibold'>Password</label>
  
              <input
                type={show ? 'text' : 'password'}
                placeholder='Enter your password'
                className='border border-gray-300 rounded-lg px-4 pr-10 h-10 outline-none focus:border-green-700'
             onChange={(e)=>setPassword(e.target.value)} value={password}/>
  
              {/* Eye Icon */}
              <div
                onClick={() => setShow(!show)}
                className='absolute right-3 top-9 cursor-pointer text-gray-500 text-xl'
              >
                {show ? <IoIosEyeOff /> : <MdOutlineRemoveRedEye />}
              </div>
            </div>
  
          
  
            {/* Button */}
            <button className='bg-green-900 text-white py-2 rounded-lg mt-3 hover:bg-green-800 transition' onClick={handleLogin}>
             Log In 
            </button>
  <div className='text-center text-gray-500 text-sm mt-1'>
            <button className='text-green-900 font-semibold hover:underline' onClick={() => navigate('/forgot-password')}>
              Forgot Password?
            </button>
          </div>
            {/* OR Continue */}
            <div className='text-center text-gray-500 text-sm mt-1'>
              OR continue With
            </div>
  
            {/* Google Button */}
            <div className='w-full h-10 border border-gray-300 rounded-md flex items-center justify-center  cursor-pointer hover:bg-gray-100 transition'>
              <img src={images} alt="google" className='w-5' />
              <span className='font-semibold font-medium'>oogle</span>
            </div>
  <div className='text-center text-gray-500 text-sm mt-1'>
            Don't have an account? <button className='text-green-900 font-semibold hover:underline' onClick={() => navigate('/signup')}>
              Sign Up
            </button>
          </div>
          </div>
  
          {/* RIGHT SIDE */}
          <div className='hidden md:flex w-1/2 bg-green-900 flex-col items-center justify-center text-white'>
            <img src={logo} alt="Logo" className='rounded-full w-24 shadow-2xl mb-4' />
            <span className='text-2xl font-semibold'>Learning Managment System</span>
          </div>
  
        </form>
  
      </div>
    )
  }

export default Login