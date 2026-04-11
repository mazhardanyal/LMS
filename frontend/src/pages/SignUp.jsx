import React, { useState} from 'react'
import logo from '../assets/logo.png'
import images from '../assets/images.jpg'
import { MdOutlineRemoveRedEye } from "react-icons/md"; 
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [show, setShow] = useState(false)
const navigate = useNavigate()
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [role, setRole] = useState('student')

const handleSignUp = async()=>{
try{
  const result =await axios.post('server+"/api/auth/signup" ,{
}catch (error) {

}

}
  return (
    <div className='bg-[#dddbdb] w-full min-h-screen flex items-center justify-center overflow-x-hidden p-4'>

  <form onSubmit={handleSignUp} className='rounded-2xl w-full max-w-4xl bg-white shadow-xl flex flex-col md:flex-row overflow-hidden'>
        {/* LEFT SIDE */}
        <div className='w-full md:w-1/2 p-8 flex flex-col justify-center gap-4'>

          {/* Heading */}
          <div className='mb-2'>
            <h1 className='text-2xl font-semibold'>Lets Get Started</h1>
            <h2 className='text-sm text-gray-500'>Create Your Account</h2>
          </div>

          {/* Name */}
          <div className='flex flex-col gap-1'>
            <label className='font-semibold'>Name</label>
            <input
              type="text"
              placeholder='Your Good Name'
              className='border border-gray-300 rounded-lg px-4 h-10 outline-none focus:border-green-700'
            onChange={(e)=>setName(e.target.value)} value={name}/>
          </div>

          {/* Email */}
          <div className='flex flex-col gap-1'>
            <label className='font-semibold'>Email</label>
            <input
              type="email"
              placeholder='Enter your email'
              className='border border-gray-300 rounded-lg px-4 h-10 outline-none focus:border-green-700'
           onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </div>

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

      {/* Role Selection */}
<div className='flex gap-3 mt-2'>
  
  {/* Educator */}
  <span
    className={`border px-4 py-1 rounded-full cursor-pointer transition 
    ${role === 'educator' 
      ? 'border-red bg-green-900 text-white' 
      : 'border-gray-800 hover:border-yellow hover:bg-green-900 hover:text-white'}`}
    onClick={() => setRole("educator")}
  >
    Educator
  </span>

  {/* Student */}
  <span
    className={`border px-4 py-1 rounded-full cursor-pointer transition 
    ${role === 'student' 
      ? 'border-red bg-green-900 text-white' 
      : 'border-gray-800 hover:border-yellow hover:bg-green-900 hover:text-white'}`}
    onClick={() => setRole("student")}
  >
    Student
  </span>

</div>

          {/* Button */}
          <button className='bg-green-900 text-white py-2 rounded-lg mt-3 hover:bg-green-800 transition'>
            Sign Up
          </button>

          {/* OR Continue */}
          <div className='text-center text-gray-500 text-sm mt-1'>
            OR Continue With
          </div>

          {/* Google Button */}
          <div className='w-full h-10 border border-gray-300 rounded-md flex items-center justify-center  cursor-pointer hover:bg-gray-100 transition'>
            <img src={images} alt="google" className='w-5' />
            <span className='font-semibold font-medium'>oogle</span>
          </div>
<div className='text-center text-gray-500 text-sm mt-1'>
            Already have an account? <button className='text-green-900 font-semibold hover:underline' onClick={() => navigate('/login')}>
              Log In
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='hidden md:flex w-1/2 bg-green-900 flex-col items-center justify-center text-white'>
          <img src={logo} alt="Logo" className='rounded-full w-24 shadow-2xl mb-4' />
          <span className='text-2xl font-semibold'>Learning Managment System </span>
        </div>

      </form>

    </div>
  )
}

export default SignUp