import React, { useEffect  ,useState} from "react";
import Typed from 'typed.js'
import ScrollReveal from 'scrollreveal'
import './Profile.css'

function Profile(){

    useEffect(()=>{

        
    const delay ={
        origin: "top",
        distance: "80px",
        delay:300,
        reset:true
      }

      const interval = {
        origin: "top",
        distance: "80px",
        duration: 1000,
        interval: 400,
        reset: true,
      };



        ScrollReveal().reveal(".home .content p", delay);
        ScrollReveal().reveal(".btn", delay);
    
        ScrollReveal().reveal(".social-icons .linkedin", interval);
        ScrollReveal().reveal(".social-icons .github", interval);
        ScrollReveal().reveal(".home .twitter", interval);
        ScrollReveal().reveal(".home .telegram",interval );
        ScrollReveal().reveal(".home .instagram", interval);
        ScrollReveal().reveal(".home .dev", delay);

        return () => {
            // Reset ScrollReveal when the component unmounts
            ScrollReveal().destroy();
          };
    

    },[])

   
    
   
    

useEffect(()=>{
    var typed = new Typed(".typing", {
        strings: ["frontend development", "backend development", "web designing", "android development", "web development"],
        startDelay:300,
        typeSpeed: 150,
        backDelay:300,
        backSpeed: 150,
        smartBackspace:false,
        showCursor:true,
        loop:true

    });
    return () => {
        typed.destroy();
      };

},[])
   
    return(
        <div className="home" id="home">
            <div className="content">
            <h2>Hi There , <br/> I'm Bhavik <span>Phatak</span></h2>
            <p>I a'm a <span className="typing"></span></p>
            <a href="#about" className="btn"><span>About Me</span><i class="fas fa-arrow-circle-down"></i></a>


            <div className="socials">
        <ul className="social-icons">
          <li><a className="linkedin"  href="" ><i class="fab fa-linkedin"></i></a></li> 
          <li><a className="github"  href=""><i class="fab fa-github"></i></a></li>
          <li><a className="twitter"  href="" ><i class="fab fa-twitter"></i></a></li>
          <li><a className="telegram"  href="" ><i class="fab fa-telegram-plane"></i></a></li>
          <li><a className="instagram"  href=""><i class="fab fa-instagram" ></i></a></li>
          <li><a className="dev"  href="" ><i class="fab fa-dev"></i></a></li>
        </ul>
         </div>
         
        </div>

        </div>
    )
}

export default Profile