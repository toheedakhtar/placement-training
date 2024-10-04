import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const GoogleAuth = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        if(token){
            const decodedToken = jwtDecode(token);
            const user = {
                token, 
                user : decodedToken,
                role : decodedToken.role
            }
            dispatch(loginWithGoogle(user))
            navigate('/');
        }else{
            navigate('/login')
        }

    }, [dispatch, navigate])

  return (
    <div>
      GoogleAuth
    </div>
  )
}

export default GoogleAuth
