import React from "react"
import logo from '../image/des.jpg'
import './Work.css'

function Work(){
    return(
        <div className="work">
           <h2 class="heading"><i class="fas fa-laptop-code"></i> Projects <span>Made</span></h2>
        <div className="box-container">
            <div className="boxwork">
                <img src={logo} />
                <div className="content">
                     <div className="tag">
                         <h3>Portfolio Website</h3>
                    </div>
                    <div className="desc">
                         <p>Personal portfolio website. Don't need much info about it, just scroll down. You're here only!</p>
                         <div className="btns">
                            <a href="#" class="btn1" target="_blank"><i class="fas fa-eye"></i> View</a>
                            <a href="" class="btn1" target="_blank">Code <i class="fas fa-code"></i></a>
                        </div>

                    </div>

                </div>


            </div>
            <div className="boxwork">
                <img src={logo} />
                <div className="content">
                     <div className="tag">
                         <h3>Portfolio Website</h3>
                    </div>
                    <div className="desc">
                         <p>Personal portfolio website. Don't need much info about it, just scroll down. You're here only!</p>
                         <div className="btns">
                            <a href="#" class="btn1" target="_blank"><i class="fas fa-eye"></i> View</a>
                            <a href="" class="btn1" target="_blank">Code <i class="fas fa-code"></i></a>
                        </div>

                    </div>

                </div>


            </div>

        </div>

        </div>
    )
}
export default Work