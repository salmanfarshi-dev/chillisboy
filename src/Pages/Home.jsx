import React from 'react';
import Navbar from '../Layout/Navber';
import Banner from '../Layout/Banner';
import Mood from '../Layout/Mood';
import Lagos from '../Layout/Lagos';
import UseChillsbay from '../Layout/UseChillsbay';
import Tour from '../Layout/Tour';
import Photogallery from '../Layout/Photogallery';
import Footer from '../Layout/Footer';

function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Mood/>
    <Lagos/>
    <UseChillsbay/>
    <Tour/>
    <Photogallery/>
    <Footer/>
  
    </>

  )
}

export default Home