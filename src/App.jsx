import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Produtos from './components/Produtos'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path='/' element={<Produtos />}/>
        </Routes> 

        <Footer />
      </BrowserRouter>
     
    </div>
  )
}

export default App