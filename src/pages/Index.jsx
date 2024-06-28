import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Nav from './Home/Nav'
import Footer from './Home/Footer'
import Copyright from './Home/Copyright'
import About from './About/About'
import Projects from './Projects/Projects'
import Resume from './CV/Resume'
import MusicApp from './SingleProjects/MobileDev/MusicApp'
import FashionAcademy from './SingleProjects/MobileDev/FashionAcademy'
import FoodieApp from './SingleProjects/MobileDev/FoodieApp'
import Certificate from './CV/Certificate'

const Index = () => {
  return (
    <>
       <Router>
             <Nav />
            <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='about' element={<About />}/>
                    <Route path='projects' element={<Projects />}/>
                    <Route path='cv' element={<Resume />}/>
                    <Route path='kedu' element={<MusicApp />}/>
                    <Route path='swifa' element={<FashionAcademy />}/>
                    <Route path='foodie' element={<FoodieApp />}/>
                    <Route path='cert' element={<Certificate />}/>
            </Routes>
           <Footer />
             <Copyright />
       </Router>
       
    </>
  )
}

export default Index