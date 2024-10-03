import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {z} from 'zod';

const Signup = () => {
    // const [formData, setFormData] = useState({});
    const validationSchema = z.object({
        "name" : z.string().min(1, "Name required"),
        "email" : z.string().min(1,"Email is required").email("Invalid Email"),
        "password" : z.string().min(8, 'Password must be of atleast 8 letters')
        .regex(/[a-z]/, "Passoword must contain a lowercase letter")
        .regex(/[A-Z]/, "Passoword must contain a Uppercase letter")
        .regex(/[0-9]/, "Passoword must contain a numeric")
        .regex(/[\w_]/, "Passoword must contain a special letter"),
        "phoneNumber" : z.string().min(10, "Phone number must contain 10 letters").max(10, "Phone number must be 10 letters")
    })

    const {register, handleSubmit, formState : {errors}} = useForm({
        resolver: zodResolver(validationSchema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div className='w-4/5 h-4/5 flex justify-center items-center bg-white shadow-2xl rounded'>
        <div className='w-1/2'>
        <img src='https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--new-user-registering-log-register-form-maggy-pack-design-development-illustrations-4097209.png' alt='' className='w-full'/>
        </div>
        <div className='w-1/2 flex flex-col gap-8'>
        <h1 className='text-3xl text-blue-500 font-semibold text-center'>Welcome ! sign-up </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-3'>
                    
                    <div>
                        <label className='text-blue-600 font-medium'>Name</label>
                        <input type='text' placeholder='' className={`p-2 border border-gray-700 outline-blue-500 w-[90%] my-2 rounded shadow-xl ${errors.name ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500 "}`} {...register("name")}/>
                        {errors.name && ( <p className='text-xs text-red-600'>{errors.name.message}</p> ) }
                    </div>

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

                    <div>
                        <label className='text-blue-600 font-medium'>Phone Number</label>
                        <input type='number' placeholder='' className={`p-2 border border-gray-700 outline-blue-500 w-[90%] my-2 rounded shadow-xl ${errors.phoneNumber ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500 "}`} {...register("phoneNumber")}/>
                        {errors.phoneNumber && ( <p className='text-xs text-red-600'>{errors.phoneNumber.message}</p> ) }
                    </div>
                </div>
                <button className='bg-blue-500  active:bg-blue-600 p-2 font-medium w-[95%] my-5 shadow-xl rounded'>Sign-Up</button>
            </form>
        </div>

    </div>
  )
}

export default Signup
