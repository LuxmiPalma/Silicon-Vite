import { useState, createContext } from "react"

export const BrandsContext = createContext()

export const BrandsProvider = ({children}) => {
    const [brands, setBrands] = useState([
        { id: 1, url: '/images/Brands/logo1st.svg'   , alt: 'brand 1' },
        { id: 2, url: '/images/Brands/logoipsum2.svg', alt: 'brand 2' },
        { id: 3, url: '/images/Brands/logoipsum3.svg', alt: 'brand 3' },
        { id: 4, url: '/images/Brands/logoipsum4.svg', alt: 'brand 4' },
        { id: 5, url: '/images/Brands/logoipsum5.svg', alt: 'brand 5' },
        { id: 6, url: '/images/Brands/logoipsum6.svg', alt: 'brand 6' }
      ])
      return (
        <BrandsContext.Provider value={{ brands }}>
            {children}
        </BrandsContext.Provider>
  )
}

