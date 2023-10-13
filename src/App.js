import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import About from "./About/About";
import ScrollReveal from "scrollreveal";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Work from "./Work/Work";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Linking from "./Navbar/Linking";


function App() {
  useEffect(() => {

    const delay ={
      origin: "top",
      distance: "80px",
      delay:300,
      reset:true
    }

    const delayleft ={
      origin: "left",
      distance: "80px",
      delay:400,
      reset:true
    }
    const delaybottom ={
      origin: "top",
      distance: "80px",
      delay:500,
      reset:true
    }

    const interval = {
      origin: "top",
      distance: "80px",
      duration: 1000,
      interval: 400,
      reset: true,
    };
    const inta = {
      origin: "top",
      distance: "80px",
      duration: 100,
      interval: 100,
      reset: true,
      scale:1.3
    };


    ScrollReveal().reveal(".header .logo ", delayleft);
    // ScrollReveal().reveal(".header .menusection .navbar  ", delay);


    
    // ScrollReveal().reveal(".home .content h2", delay);
    


     


  ScrollReveal().reveal('.education .box',  interval);


  ScrollReveal().reveal('.work .boxwork',  interval)
  ScrollReveal().reveal('.experience .timeline',  delay);
  ScrollReveal().reveal('.experience .timeline .container', interval);
  ScrollReveal().reveal('.contact .container',  delay );
ScrollReveal().reveal('.contact .container .form-group',delay );



ScrollReveal().reveal('.footer .box-container .box',delayleft );
ScrollReveal().reveal('.footer  .credit',delaybottom );







  },[]);

  return (
    <div className="App">
      <Navbar />

      
      {/* <Linking /> */}
      <Profile />
      <About />
      <Skills />
      <Education />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
