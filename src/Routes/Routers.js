import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import  Login  from '../components/Login'
import  Signup  from '../components/Signup'
import  Courses  from '../components/Courses'
import { Adminlogin } from '../components/Admin/Adminlogin'
import Admindashboard from '../components/Admin/Admindashboard'
import { Posts } from '../components/Posts'
import Studentdashboard from '../components/Studentdashboard'

 const Routers = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Posts/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/adminlogin" element={<Adminlogin/>} />
      <Route path="/admindashboard" element={<Admindashboard/>}/>
      <Route path='/studentdashboard' element={<Studentdashboard/>}/>
    </Routes></div>
  )
}
export default Routers
