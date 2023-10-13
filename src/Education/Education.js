import React from "react"
import Img1 from '../image/B2.jpg'
import Img2 from '../image/ismail-yusuf-college.jpg'
import Img3 from '../image/valia-college-of-commerce-and-arts-mumbai.jpg'


import "./Education.css"

function Education(){
    return(
        <div className="education" id="education">
            <h1 class="heading"><i class="fas fa-graduation-cap"></i> My <span>Education</span></h1>
            <p class="qoute">Education is not the learning of facts, but the training of the mind to think.</p>

            <div className="box-container">
            <div class="box">
              <div class="image">
             <img  src={Img1} />
             </div>
            <div class="content">
                <h3>Master of Science in Computer Science</h3>
                <p>Thakur college | Mumbai</p>
                 <h4>2021-2023 | Completed</h4>
             </div>
             </div>


             <div class="box">
              <div class="image">
             <img  src={Img2} />
             </div>
            <div class="content">
                <h3>Bachelors of Science in Computer Science</h3>
                <p>Imail Yusuf college | Mumbai</p>
                 <h4>2018-2021 | Completed</h4>
             </div>
             </div>


             <div class="box">
              <div class="image">
             <img  src={Img3} />
             </div>
            <div class="content">
                <h3>HSC (12th)</h3>
                <p>Valia college | Mumbai</p>
                 <h4>2016-2018 | Completed</h4>
             </div>
             </div>


            </div>

            


            

        </div>
    )
}

export default Education