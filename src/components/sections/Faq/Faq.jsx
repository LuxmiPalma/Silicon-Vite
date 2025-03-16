import React, { useEffect } from 'react'
import Accordion from '../../elements/Accordion'
import ContactOption from '../../elements/ContactOption'
import "./Faq.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: false, 
      mirror: true, 
      delay: 100
    });
  }, []);

  return (
    <section id="faq">
        <div className="container"data-aos="zoom-in-up">
            
            <div className="headline">
                <h2 data-aos="zoom-in">Any questions?<br /> Check out the FAQs</h2>
                <p data-aos="fade-up">Still have unanswered questions and need to get in touch?</p>
            </div>

            <div className="contact-options"data-aos="flip-left">
                <ContactOption icon="fa-solid fa-phone" text="Still have questions?" uri="/contact" linkText="Contact us" color="purple" />
                <ContactOption icon="bi bi-chat-dots-fill" text="Don't like phone calls?" uri="/contact" linkText="Contact us" color="green" />
            </div>

            <Accordion />

        </div>

        <div className="mobile-contact"data-aos="flip-right">
          <a href="/contact" className="btn-contact">Contact us now</a>
        </div>
    </section>
  )
}

export default Faq