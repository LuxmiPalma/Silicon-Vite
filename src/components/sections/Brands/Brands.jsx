import React, { useContext} from 'react'
import "./Brands.css";

import { BrandsContext } from '../../../contexts/BrandsContext'
import ImageSlider from '../../elements/ImageSlider'

const Brands = () => {
  const {brands} = useContext(BrandsContext)

  return (
    <section id="brands">
        <div className="container">
          <ImageSlider images={brands} />
        </div>
    </section>

  )
}

export default Brands