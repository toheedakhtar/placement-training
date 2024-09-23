import React from 'react'

const Signup = () => {
  return (
    <div className='w-4/5 h-4/5 flex justify-center items-center '>
        <div className='w-1/2'>
            <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg' alt='' className='w-full' />
        </div>
        <div className='w-1/2'>
            <form action="">
                <div>
                    <div>
                        <label>Name</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>email</label>
                        <input type='email' />
                    </div>
                    <div>
                        <label>password</label>
                        <input type='password' />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type='number' />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup
