import React from 'react'


import Brands from '../components/sections/Brands/Brands'
import Faq from '../components/sections/Faq/Faq'
import Testimonials from '../components/sections/ClientsAreLovingOurApp/Testimonials'
import Subscribe from '../components/sections/Subscribe/Subscribe'
import ReceivePayment from '../components/sections/ReceivePayment/ReceivePayment'
import HowDoesItWork from '../components/sections/How.D.I.W/HowDoesItWork'
import AppFeatures from '../components/sections/AppFeatures/AppFeatures'
import Hero from '../components/sections/Hero/Hero'
import MoneyTransfer from '../components/sections/MoneyTransfer/MoneyTransfer'





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