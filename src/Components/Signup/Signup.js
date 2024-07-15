import React,{useState} from 'react'
import './Signup.css'
import axios from 'axios'
export default function Signup() {
    const [formData,setFormData] = useState({
        user_firstname:'',
        user_lastname: '',
        user_email: '',
        user_password: '',
        user_phone: ''
    })
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const payload = {
            ...formData,
            user_city:'Hyderabad',
            user_zipcode:'500072'
        }
        try{
            const response = await axios.post('',payload)
            console.log(response.data)

        }
        catch(error){
            console.log(error)
        }
    }


  return (
    <div className='cont'>
      <div className='context-cont'>
        <h1>Welcome to UserVerse</h1>
        <h3>About UserVerse</h3>
        <p>UserVerse is your all-in-one platform for seamless user management, 
            offering a universe of features to enhance interaction, data visualization, 
            and security. Whether you're managing personal tasks or overseeing a large user base, 
            UserVerse provides the tools you need to stay organized and efficient.
        </p>
        <h3>Get Started</h3>
        <h5>New to UserVerse?</h5>
        <p><span>Sign Up Now!</span></p>
        <p>Create your account to unlock the full potential of UserVerse. Join our community today!</p>

      </div>
      <div className='signup-cont'>
        <form className='signup-form' onSubmit={handleSubmit}>
            <div className='each-input'>
                <label>First Name * </label>
                <input type="text" name="user_firstname" placeholder="e.g., Mallika" value={formData.user_firstname} onChange={handleChange} required />
            </div>
            <div className='each-input'>
                <label>Last Name * </label>
                <input type="text" name="user_lastname" placeholder="e.g., Singh" value={formData.user_lastname} onChange={handleChange} required />
            </div>
            <div className='each-input'>
                <label>Email Address * </label>
                <input type="email" name="user_email" placeholder="e.g., mallikasingh123@gmail.com" value={formData.user_email} onChange={handleChange} required />
            </div>
            <div className='each-input'>
                <label>Phone Number * </label>
                <input type="text" name="user_phone" placeholder="e.g., 1234567890" value={formData.user_phone} onChange={handleChange} required />
            </div>
            <div className='each-input'>
                <label>Password * </label>
                <input type="password" name="user_password" placeholder="" value={formData.user_password} onChange={handleChange} required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <div className='login-option-cont'>
            <h5>Already a Member?</h5>
            <p>Welcome back! Log in to access your personalized dashboard and manage your account seamlessly.</p>
            <button>Log In Now!</button>
        </div>
      </div>
      <div className='why-us-cont'>
        <h3>Why Choose UserVerse?</h3>
        <ul>
            <li>
                <h5>User Management</h5>
                <p>Easily manage profiles, roles, and permissions.</p>
            </li>
            <li>
                <h5>Secure Authentication</h5>
                <p>Enjoy secure signup and login with 2FA.</p>
            </li>
            <li>
                <h5>Customizable Dashboard</h5>
                <p>Visualize key data with personalized charts and graphs.</p>
            </li>
            <li>
                <h5>Real-Time Communication</h5>
                <p>Stay connected with built-in messaging and notifications.</p>
            </li>
        </ul>

      </div>
    </div>
  )
}
