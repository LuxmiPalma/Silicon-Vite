import React from 'react'
import Brands from '../components/sections/Brands'
import Hero from '../components/sections/Hero'

import Faq from '../components/sections/FAQ'
import Testimonials from '../components/sections/Testimonials'
import Subscribe from '../components/sections/Subscribe'

import MoneyTransfer from '../components/sections/MoneyTransfer'
import ReceivePayment from '../components/sections/ReceivePayment'
import HowDoesItWork from '../components/sections/HowDoesItWork'
import AppFeatures from '../components/sections/AppFeatures/AppFeatures'





const HomePage = () => {
  
  return (
    <>
     <Hero />
    <Brands />
    <AppFeatures />
    <HowDoesItWork />
    <MoneyTransfer />
    <ReceivePayment />
    <Testimonials />
    <Faq />
    <Subscribe />
    
   
   
      
      
    </>
  )
}

export default HomePage