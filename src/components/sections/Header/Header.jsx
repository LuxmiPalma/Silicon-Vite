import React, { useContext, useEffect } from 'react'

import ToggleSwitch from '../../elements/ToggleSwitch'
import LinkButton from '../../elements/LinkButton'
import { Link, NavLink } from 'react-router-dom'
import { DarkModeContext } from '../../../contexts/DarkModeContext'
import "./Header.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
      mirror: true, 
      delay: 100 
    });
  }, []);

  return (
    <header id="header"data-aos="fade-down">
      <div className="container">

        <Link to="/" className="logotype"data-aos="zoom-in">
          <img src={ darkMode ? '/images/logotype_dark.svg' : '/images/logotype_light.svg' } alt="Silicon Inc." />
        </Link>

        <nav>
          <NavLink to="/features" className="nav-link"data-aos="fade-right">Features</NavLink>
          <NavLink to="/contacts" className="nav-link" data-aos="fade-left">Contacts</NavLink>
        </nav>

        <div data-aos="flip-up">
        <ToggleSwitch id="theme-switch" text="Dark Mode" currentState={darkMode} currentStateCallback={toggleDarkMode} />
        </div>

        <div className='btn-account'data-aos="zoom-in">       
        <LinkButton to="signin" text="sign in" color="purple" icon="bi bi-person" />
       </div>

       <div className="btn-menu" data-aos="flip-left">
          <LinkButton to="#" text="" color="transparent" icon="bi bi-list" />
        </div>

        


      </div>
    </header>
  )
}

export default Header