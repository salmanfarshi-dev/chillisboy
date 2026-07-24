import React from 'react'
import Navbar from '../Layout/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../Layout/Footer'


function Rootlayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Rootlayout