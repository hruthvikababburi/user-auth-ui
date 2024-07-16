import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import './Dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('user')
    navigate('/Signup')
  }
  return (
    <div className='dashboard-cont'>
      <div className='d-context-cont'>
        <div className='common-cont'>
          <div className='common-inn-cont'>
            <h1>Welcome to Your Dashboard</h1>
            <MdOutlineDashboardCustomize className='icon'/>
          </div>
          <button className='logout' onClick={handleLogout}><BiLogOutCircle className='logout-icon'/></button>
        </div>
        
        <h3>Your Personalized Hub for UserVerse</h3>
        <p>Welcome back, UserVerse! Here on your dashboard, 
          you have access to all the tools and insights you need 
          to manage your UserVerse experience effectively.
        </p>
        <h3>Your Profile Information</h3>
          
        <h5>User Details</h5>
        <ul>
          <li>
            <h5>Name: </h5> 
            <span>this is name</span>
          </li>
          <li>
            <h5>Email: </h5> 
            <span>this is </span>
          </li>
          <li>
            <h5>Contact: </h5> 
            <span>this is </span>
          </li>
          <li>
            <h5>Registration Id: </h5> 
            <span>this is </span>
          </li>
        </ul>

      </div>
    </div>
  )
}
