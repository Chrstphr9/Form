import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Login = () => {

    const style = {
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        // width: 400,
        // bgcolor: 'red',
        // border: '2px solid #000',
        // boxShadow: 24,
        // p: 4,
      };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    
    <section className="login">
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
     <button onClick={handleOpen} className='pass'>Open modal</button>
     <Modal className='modal'
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
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
  </section>
  )
}

export default Login