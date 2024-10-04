import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {z} from 'zod';
import {login } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const [formData, setFormData] = useState({});
    const validationSchema = z.object({
        "email" : z.string().min(1,"Email is required").email("Invalid Email"),
        "password" : z.string().min(8, 'Password must be of atleast 8 letters')
    })

    const {register, handleSubmit, formState : {errors}} = useForm({
        resolver: zodResolver(validationSchema)
    });

    const { isAuth }   = useSelector((state)=>state.auth)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log(errors)
    const onSubmit = async (data) => {
        dispatch(login(data))        
        // dispatch(setLoading())
        // try{
        //     const response = await axios.post('http://localhost:5000/auth/signup', data)
        //     // console.log(response)
        //     dispatch(setSucces(response.data.data))
        // }
        // catch(error){
        //     dispatch(setError(error.response.data || "Internal Server Error"))
        // }
    };

    useEffect(()=>{
      if(isAuth){
        navigate("/")
      }
    },[isAuth]);


  return (
    <div className='w-4/5 h-4/5 flex justify-center items-center bg-white shadow-2xl rounded'>
        <div className='w-1/2'>
        <img src='https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--new-user-registering-log-register-form-maggy-pack-design-development-illustrations-4097209.png' alt='' className='w-full'/>
        </div>
        <div className='w-1/2 flex flex-col gap-8'>
        <h1 className='text-3xl text-blue-500 font-semibold text-center'>Welcome ! Log-In </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-3'>

                    <div>
                        <label className='text-blue-600 font-medium'>Email</label>
                        <input type='email' placeholder='' className={`p-2 border border-gray-700 outline-blue-500 w-[90%] my-2 rounded shadow-xl ${errors.email ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500 "}`} {...register("email")}/>
                        {errors.email && ( <p className='text-xs text-red-600'>{errors.email.message}</p> ) }
                    </div>

                    <div>
                        <label className='text-blue-600 font-medium'>Password</label>
                        <input type='password' placeholder='' className={`p-2 border border-gray-700 outline-blue-500 w-[90%] my-2 rounded shadow-xl ${errors.password ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500 "}`} {...register("password")}/>
                        {errors.password && ( <p className='text-xs text-red-600'>{errors.password.message}</p> ) }
                    </div>

                </div>
                <button className='bg-blue-500  active:bg-blue-600 p-2 font-medium w-[95%] my-5 shadow-xl rounded'>Sign-Up</button>
            </form>
        </div>

    </div>
  )
}

export default Login
