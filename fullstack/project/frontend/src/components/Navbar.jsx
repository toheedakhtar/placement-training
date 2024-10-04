import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import { logOut } from '../redux/slices/authSlice';

const Navbar = () => {

    const { isAuth, role } = useSelector((state)=>state.auth) 
    const dispatch = useDispatch()

    const handleLogout = () => {
      dispatch(logOut())
    }

  return (
    <div className='flex justify-between items-center bg-slate-950 p-2 py-3 px-4 w-full '>

      <div className='text-white text-2xl font-medium '>Logo</div>

      <div><input type='text' placeholder='search..' className='p-2 py-1 border border-gray-200 bg-transparent text-white outline-none'/>
      </div>

      <div className='flex gap-5 items-center'>
        {
          isAuth ?
          (
            role == 'User'
                ? 
                (
                  <div className='flex gap-5 text-white'>
                    <Link to="/cart">Cart</Link> 
                    <Link to="/profile">Profile</Link> 
                    <Link to="/myorders">MyOrders</Link> 
                </div>
                )
                :
                (
                  <div className='flex gap-5 text-white'>
                    <Link to="/dashboard">Dashboard</Link> 
                    <Link to="/adminusers">Users</Link> 
                    <Link to="/adminproduct">Products</Link>
                    <Link to="/adminorder">Orders</Link> 
                    <Link to="/profile">Profile</Link> 

                </div>
                )
              )
            :
            (
              <div className='flex gap-5 text-white'>
                <Link to="/cart">Cart</Link> 
                <Link to="/login">Login</Link> 
                <Link to="/signup">Signup</Link> 
            </div>
            )
          }
          {isAuth && (
            <button className='text-xl text-white' onClick={handleLogout}><FiLogOut /></button>
          )}
      </div>  

    </div>
  )
}

export default Navbar
