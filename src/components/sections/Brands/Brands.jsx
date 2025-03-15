import React, { useContext, useEffect, useState } from "react";
import "./Brands.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrandsContext } from "../../../contexts/BrandsContext";
import ImageSlider from "../../elements/ImageSlider";

const Brands = () => {
  const { brands } = useContext(BrandsContext);
  const [visibleBrands, setVisibleBrands] = useState(brands);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      delay: 100,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setVisibleBrands(brands.slice(0, 4)); // ✅ Show only 4 brands on tablet
      } else {
        setVisibleBrands(brands); // ✅ Show all brands on desktop
      }
    };

    handleResize(); // ✅ Set initial state based on current width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // ✅ Cleanup listener on unmount
    };
  }, [brands]); // ✅ Dependency array ensures correct behavior

  return (
    <section id="brands">
      <div className="container" data-aos="fade-up">
        <ImageSlider images={visibleBrands} data-aos="fade-left" />
      </div>
    </section>
  );
};

export default Brands;
