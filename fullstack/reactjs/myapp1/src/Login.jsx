import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const hanldeSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            alert('User Logged In');
            setLoading(false);
        }, 2000);
    }


  return (
    <div className='w-[88%] h-4/5 bg-white rounded-xl shadow-xl flex'>
        <div className='w-1/2 h-full flex justify-center'>
            <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" className='h-full' />
        </div>
        <div className='w-1/2 flex flex-col justify-center gap-4 items-center'>
        <h1 className='text-2xl font-semibold'>Welcome Back !</h1>
        <form onSubmit={hanldeSubmit} className='flex flex-col items-center w-full justify-center gap-4'>
        <input type="email" placeholder='Email or Username' className='p-2 border border-gray-600 rounded w-3/5' onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder='Password' className='p-2 border border-gray-600 rounded w-3/5' onChange={(e)=>setPassword(e.target.value)} />

        <button type='submit' className='bg-gray-700 text-white font-medium w-3/5 rounded shadow p-2 active:bg-gray-800'>{loading ?  <CircularProgress/>  : "Login"}</button>
        </form>
        </div>
    </div>
  )
}

export default Login