/* eslint-disable no-unused-vars */
import { useState } from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// import {createUser,setAuthentication} from "./registerSlice"
import { Avatar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./register.css";
import Home from '../Home/Home'


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();

  const signUpHandler = async()=>{
    if(!username || !password || !name || !email) return ;
  
    try {
      const formData = {
        username:username,
        password:password,
        name:name,
        email:email,
        mobile:mobile
      }
      const response = await axios.post(
        'http://localhost:8085/user/auth/signup', 
        formData, 
        {
          headers: {
            'Content-Type': 'application/json', // Specify content type as JSON
          },
        }
      );
         // Assuming a successful form submission triggers the success message
      toast.success(response.data.message, {
        position: 'top-right', // Notification position
        autoClose: 3000, // Notification auto close time in milliseconds
        hideProgressBar: false, // Display progress bar or not
        closeOnClick: true, // Close the notification on click
        pauseOnHover: true, // Pause the timer when hovering over the notification
        draggable: true, // Allow dragging the notification
      });
      setTimeout(() => {
          if(response.data.success){
            dispatch({type:'register/setAuthentication'});
          }
      }, 3000); // Redirect after 3 seconds (adjust as needed)
      // Handle successful POST request here, e.g., show success message
      
    } catch (error) {
      // Handle error scenarios, e.g., show error message
      console.error('There was a problem with the POST request:', error.message);
    }
  }
  
  return (
    <div className="register">
      <form className="registerForm">
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social App
        </Typography>

        <input
          type="text"
          value={username}
          placeholder="userName"
          className="registerInputs"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="password"
          className="registerInputs"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          value={name}
          placeholder="name"
          className="registerInputs"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          className="registerInputs"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          value={mobile}
          placeholder="mobile"
          className="registerInputs"
          onChange={(e) => setMobile(e.target.value)}
        />

        <Button className="button" onClick={signUpHandler}>
          Sign Up
        </Button>

        <Link to="/">
          <Typography>Already Signed Up? Login Now</Typography>
        </Link>

        
      </form>
      <ToastContainer /> {/* This is where the notifications will be rendered */}
    </div>
  );
};

export default Register;