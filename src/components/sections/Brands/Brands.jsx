import React, { useContext, useEffect} from 'react'
import "./Brands.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrandsContext } from '../../../contexts/BrandsContext'
import ImageSlider from '../../elements/ImageSlider'

const Brands = () => {
  const {brands} = useContext(BrandsContext)

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: false, 
      mirror: true, 
      delay: 100
      });
    }, []);
      

  return (
    <section id="brands">
        <div className="container"data-aos="fade-up">
          <ImageSlider images={brands} data-aos="fade-left"/>
        </div>
    </section>

  );
}

export default Brands;