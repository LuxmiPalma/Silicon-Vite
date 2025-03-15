import React, { useEffect } from 'react'
import "./Hero.css";
import LinkChevronButton from '../../elements/LinkChevronButton';
import LinkDownloadButton from '../../elements/LinkDownloadButton';
import AOS from 'aos'
import  'aos/dist/aos.css';



const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, 
            once: false, 
            mirror: true, 
            delay: 100
        });
    }, []);

  return (
    <section id="hero">
        <div className="container">

            <div className="headline"data-aos="zoom-out">
                <h1>Manage All Your Money in One App</h1>
            </div>
            <div className="content"data-aos="fade-up">
                <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                <div className="app-downloads">
                    <LinkDownloadButton to="/" text="App Store" description="Download on the" image="/images/icons/app-store.svg" />
                    <LinkDownloadButton to="/" text="Google Play" description="GET IT ON" image="/images/icons/googleplay-icon.svg" />
                </div>
                <LinkChevronButton to="/" text="Discover more" />
            </div>
            <div className="image"data-aos="fade-left">
                <img src="/images/hero-image.svg" alt="" />
            </div>

        </div>
    </section>
  )
}

export default Hero