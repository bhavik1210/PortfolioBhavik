import Skillsdata from './Skills.json';
import './Skills.css'
import { useEffect } from 'react';
import ScrollReveal from "scrollreveal";

function Skills(){

  useEffect(()=>{
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
    
    ScrollReveal().reveal('.skills .container',  interval );
  ScrollReveal().reveal('.skills .container .bar',  inta);

  return () => {
    // Reset ScrollReveal when the component unmounts
    ScrollReveal().destroy();
  };

  })

        function test(val){
            console.log(val)
            return(
                <div className="bar">

              <div class="info">
                <img src={val.icon}/>
                <span>{val.name}</span>
              </div>
            </div>  

            )
            
        }



    return(
        <div className="skills" id='skills'>
             <h2 class="heading"><i class="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>

             <div class="container">
          <div class="row" >
           

           
            {
                Skillsdata.map(test)

            }
            
          

      </div>
</div>
        </div>
    )
}

export default Skills