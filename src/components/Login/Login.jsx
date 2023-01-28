import React from 'react'
import './Login.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Modal from '../../Modal';


const Login = ({onClose}) => {
  const [ openModal, setOpenModal ] = useState(true)

  
  return (
    
    <section className="login">
    <div onClick={onClose} className="overlay">
    <div className="loginContainer">
    <h1>Hello</h1>
        <p className='intro'>Sign Into Your Account</p>
      <label>Email</label>
      <input
        type="text"
        placeholder='example@gmail.com'
        autoFocus
        required
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
      />
      {/* <p className="errorMsg">{emailError}</p> */}
      <label>Password</label>
      <input
        type="password"
        required
        placeholder='Enter Password'
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      />
    <a className='pass'href="" onClick= {() => setOpenModal(true)}>Forgot Password</a>
    <Modal open={openModal} onClose={()=> setOpenModal(false)} />
    
      {/* <p className="errorMsg">{passwordError}</p> */}
      <div className="btn"> 
        { (
          <>
            <button className='btn1'
            endIcon={<ArrowCircleRightOutlinedIcon />}
            color='secondary'

            

            //  onClick={event => {
            //   handleLogin(handleLogin);
              
            //  navigate("/home");
               
            // }}
            // onClick={handleLogin}
            >Sign In </button>
            
          </>
        )}
      </div>
      <div className="btn2"> 
        { (
          <>
            <button className='btn3'
            varinat="contained"
            startIcon={<ArrowCircleRightOutlinedIcon />}

            //  onClick={event => {
            //   handleLogin(handleLogin);
              
            //  navigate("/home");
               
            // // }}
            // onClick={handleLogin}
            >Back </button>
          </>
        )}
      </div>
      <p>
              Don't Have An Account ?
              <Link to="/Signup">Sign Up Here</Link>
            </p>
    </div>
    </div>
  </section>
  )
}

export default Login