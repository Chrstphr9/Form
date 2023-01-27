import Login from './Login/Login'
import React from 'react'
import Signup from './Signup/Signup'
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const All = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            
        </Routes>
    </Router>
    // <div>
    //     <Login />
    //     < Signup />
    // </div>
  )
}

export default All