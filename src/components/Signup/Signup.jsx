import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  return (
    <section className="login">
    <div className="loginContainer">
      <h1>Create An Account</h1>
    <label>First Name</label>
      <input
        type="text"
        autoFocus
        required
        placeholder='Enter Your First Name'
      />
      <label>Last Name</label>
      <input
        type="text"
        autoFocus
        required
        placeholder='Enter Your Last Name'
      />
      <label>Email</label>
      <input
        type="text"
        autoFocus
        required
        placeholder='Example@gmail.com'
      />
      <label>Passowrd</label>
      <input
        type="password"
        autoFocus
        required
        placeholder='Minimum 8 Characters'
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        
      />
      {/* <p className="errorMsg">{emailError}</p> */}
      <label>Confirm Password</label>
      <input
        type="password"
        required
        placeholder='Password Must Match' 
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
    
      />
      {/* <p className="errorMsg">{passwordError}</p> */}
      <div className="btn"> 
        { (
          <>
            <button className='btn1'
            // endIcon={<ArrowCircleRightOutlinedIcon />}
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
            // startIcon={<ArrowCircleRightOutlinedIcon />}

            //  onClick={event => {
            //   handleLogin(handleLogin);
              
            //  navigate("/home");
               
            // // }}
            // onClick={handleLogin}
            >Back </button>
          </>
        )}
      </div>
    </div>
  </section>
  )
}

export default Signup