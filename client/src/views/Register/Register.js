import React, { useState } from 'react'
import axios from 'axios'
import './Register.css';

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [role, setRole] = useState('user')

  const register = async () =>{
    try{
      const response = await axios.post(
        '/api/v1/registers',
        {
          email,
          password,
          name,
          mobileNo,
          role
        },
       { withCredentials: true } 
      );

      alert(response.data.message);
      if(response?.data?.success){
        window.location.href = '/login';
      }
    } catch(error){
      alert(error.response?.data?.message)
    }
  };
  
  return (
    <div>Register</div>
  )
}

export default Register