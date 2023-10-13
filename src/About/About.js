import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

// import resume from '../image/Bhavik-resume-.pdf'
import './About.css'
import Proimg from "../image/PicsArt_11-22-07.34.57.jpg"

function About(){

  useEffect(()=>{
    const interval = {
      origin: "top",
      distance: "80px",
      duration: 1000,
      interval: 400,
      reset: true,
    };
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

    ScrollReveal().reveal('.about .aboutcontent h3', delay);
     ScrollReveal().reveal('.about .main .aboutimg', delayleft);

    ScrollReveal().reveal('.about .aboutcontent .tag', delay);
    ScrollReveal().reveal('.about .aboutcontent p', delay );
    ScrollReveal().reveal('.about .aboutcontent .box-container',  delay);
    ScrollReveal().reveal('.about .aboutcontent .resumebtn', delay);


    return () => {
      // Reset ScrollReveal when the component unmounts
      ScrollReveal().destroy();
    };


  },[])
    return(
        <div className="about" id="about">
          
          <h2 class="heading"><i class="fa-solid fa-user-tie"></i> About <span>Me</span></h2>
          <div className="main">
            <div className="aboutimg">
                <img src={Proimg}/>
            </div>
            <div className="aboutcontent">
            <h3>I'm Bhavik</h3>
             <span class="tag">Full Stack Developer</span>
        
              <p>I am a Full-Stack developer based in Mumbai, India. 
                I am an Computer Science postgraduate from Thakur College.
                 I am very passionate about improving my coding skills & developing applications & websites.
                 I build WebApps and Websites using MERN Stack.
                 Working for myself to improve my skills.
                 Love to build Full-Stack clones. </p>


                 <div class="box-container">

            <div class="box">
              <p><span> email : </span> Bhavikphatak12@gmail.com</p>
              <p><span> place : </span> Mumbai, India - 400053</p>
            </div>
        </div>

        
        <div class="resumebtn">
            <a href=""  target="_blank" class="btn"><span>Resume</span>
                <i class="fas fa-chevron-right"></i>
            </a>
        </div>

            </div>

          </div>
    
        </div>
    )
}

export default About