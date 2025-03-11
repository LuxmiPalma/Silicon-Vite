import React, { useEffect } from 'react'

import SubscribeForm from '../../forms/SubscribeForm'
import "./Subscribe.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Subscribe = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, 
          once: false, 
          mirror: true, 
        });
      }, []);


  return (
    <section id="subscribe">
        <div className="container"data-aos="zoom-in-up">
            <div className="headline">
                <img src="/images/icons/notification-bell.svg" 
                alt="subscribe notification bell" 
                data-aos="flip-right"/>
                <h2 data-aos="fade-up">
                    Subscribe to our newsletter 
                    <span data-aos="fade-left"> to stay informed about latest updates</span>
                </h2>
            </div>
            <div className="subscribe-to-newsletter"data-aos="zoom-in">
                <SubscribeForm />
            </div>
        </div>
    </section>
  )
}

export default Subscribe