import './Login.css'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [loginData,setLoginData] = useState({
    user_email:'',
    user_password:''
  })
  const navigate = useNavigate()
  const [loginError,setLoginError] = useState('')
  const handleChange=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
   try{
    const response = await axios.post('https://syoft.dev/Api/userlogin/api/userlogin',loginData)
    console.log(response.data)
    if (response.data && response.data.status) {

      // Store user info in local storage and redirect to dashboard
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log(localStorage.data)
      navigate('/dashboard');
      setLoginError('')
      
  } else {
      setLoginError('Invalid credentials or there was an issue with login');
  }
   }
   catch(error){
    console.error(error)
    setLoginError('An error occured during login!')
   }
  }
  const handleSignup=()=>{
    navigate('/Signup')
  }
  return (
    <div className='login-cont'>
      <div className='login-c'>
        <h3>User Login</h3>
        <form className='login-form' onSubmit={handleSubmit}>
              <div className='login-input'>
                  <label htmlFor='loginEmail'>Email Address * </label>
                  <input id='loginEmail' type="email" name="user_email" placeholder="e.g., mallikasingh123@gmail.com" value={loginData.user_email} onChange={handleChange} required />
              </div>
              <div className='login-input'>
                  <label htmlFor='loginPassword'>Password * </label>
                  <input id='loginPassword' type="password" name="user_password" placeholder="*********" value={loginData.user_password} onChange={handleChange} required />
              </div>
              <button type="submit">Login</button>
              <p className='login-error-msg'>{loginError}</p>
          </form>
          <p className='signup-text'>Don't have an account?</p>
          <button className='signup' onClick={handleSignup}>Sign up</button>
      </div>
      
    </div>
  )
}
