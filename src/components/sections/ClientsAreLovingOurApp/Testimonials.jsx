import React, { useContext, useEffect } from 'react'
import { TestimonialsContext } from '../../../contexts/TestimonalsContext'
import Testimonial from '../../elements/Testimonial'
import "./Testimonials.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  const {testimonials} = useContext(TestimonialsContext)


  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: false, 
      mirror: true, 
      delay: 100  
      
    });
  }, []);

  return (
    <section id="client-testimonials">
      <div className="container" data-aos="zoom-in-up">
          <div className="headline">
              <h2>Clients are Loving Our App</h2>
          </div>
          <div className="testimonials"data-aos="flip-left"
     data-aos-easing="ease-out-cubic">

          {
            testimonials.map(testimonial => (<Testimonial key={testimonial.id} item={testimonial} />))
          }      

          </div>
      </div>
    </section>
  )
}

export default Testimonials