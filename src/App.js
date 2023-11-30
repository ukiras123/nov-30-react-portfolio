import React from 'react';
import "./style.scss"
import { images } from "./assets/img/index"
import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingIcon from './components/FloatingIcon';

function App() {
  return (
    <div className="wrapper">
      {/* <!-- Nav --> */}
      <Header />

      {/* <!-- Hero --> */}
      <Hero />

      {/* <!-- Banner --> */}
      <Banner />

      {/* <!-- Skills --> */}
      <Skills />


      {/* <!-- Projects --> */}
      <Projects />

      {/* <!-- About Me --> */}
      <AboutMe />

      {/* <!-- Get in Touch --> */}
      <Contact />


      {/* <!-- footer --> */}
      <Footer />

      {/* <!-- Floating Icon --> */}
      <FloatingIcon />
    </div>
  );
}

export default App;
