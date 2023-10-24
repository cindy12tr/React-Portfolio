import React from 'react'
import About from './components/about/About'
import { Contact } from './components/contact/Contact'
import Exper from './components/experience/Exper'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import { Test } from './components/testimonial/Test'
import Service from './components/services/Service'
import Cv from './components/cv/Cv'
const App = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Exper/>
            <Service/>
            <Cv/>
            <Test/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App