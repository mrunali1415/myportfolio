import React, { useContext } from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Services from './components/Services/services';
import Experience from './components/Experience/experience';
import Works from './components/Works/works';
import Projects from './components/Projects/projects';
import Testimonials from './components/Testimonials/testimonials';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import './App.css';
import { ThemeContext } from './contexts/Context';
//import {useContext} from 'react'

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : '' }} >


      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
