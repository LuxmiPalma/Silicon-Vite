import React from 'react'
import Brands from '../components/sections/Brands'
import Hero from '../components/sections/Hero'

import Faq from '../components/sections/FAQ'
import Testimonials from '../components/sections/Testimonials'
import Subscribe from '../components/sections/Subscribe'
import AppFeatures from '../components/sections/AppFeatures'
import HowDoesItWork from '../components/sections/HowDoesItWork'
import MoneyTransfer from '../components/sections/MoneyTransfer'





const HomePage = () => {
  
  return (
    <>
     <Hero />
    <Brands />
    <AppFeatures />
    <HowDoesItWork />
    <MoneyTransfer />
    <Testimonials />
    <Faq />
    <Subscribe />
    
   
   
      
      
    </>
  )
}

export default HomePage