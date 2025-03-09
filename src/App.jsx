import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"

import Footer from './components/sections/Footer/Footer'
import Header from "./components/sections/Header/Header"

function App() {
  
  return (
    <>
      <BrowserRouter>
        
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </BrowserRouter>
    </>
  )
}

export default App