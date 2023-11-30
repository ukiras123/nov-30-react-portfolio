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
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/about' element={<AboutMe />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
