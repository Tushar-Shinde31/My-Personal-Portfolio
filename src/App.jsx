import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contacts/> 
      <Footer/>
      </>
  );
};

export default App;
