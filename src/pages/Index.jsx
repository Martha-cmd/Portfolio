import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Nav from './Home/Nav'
import Footer from './Home/Footer'
import Copyright from './Home/Copyright'
import About from './About/About'
import Projects from './Projects/Projects'

const Index = () => {
  return (
    <>
       <Router>
             <Nav />
            <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='about' element={<About />}/>
                    <Route path='projects' element={<Projects />}/>
            </Routes>
            <Footer />
            <Copyright />
       </Router>
       
    </>
  )
}

export default Index