import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LodgingContainer from './components/LodgingContainer'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/_globaleStyle.sass'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:id" element={<LodgingContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
