import React, { useState } from 'react';
import logo from '../assets/logo.png';
import images from '../assets/images.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { server } from '../config';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForget = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post(
        server + "/api/auth/forget",
        { email },
        { withCredentials: true }
      );

      toast.success(result.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='px-4 min-h-screen  flex items-center justify-center'>
      
      {/* step 1 */}
    {step==1 &&<div>



    </div>}


      {/* step 2 */}
    {step==2 &&<div>



    </div>}



  {/* step 3 */}
    {step==3 &&<div>



    </div>}



    </div>
         
      
  )
}

export default ForgetPassword;