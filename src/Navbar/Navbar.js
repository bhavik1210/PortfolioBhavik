import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className='header'>
            <a href='' className='logo'><i class="fa-brands fa-slack"></i>Bhavik</a>
           
                <div className='menusection'>
                <input type='checkbox' id="menu"/>
                <label for="menu" id="menustyle"><i  class="fas fa-bars"></i></label>   
                <label for="menu" id="menustyle1"> <i class="fa-solid fa-circle-xmark"></i> </label>   
                
               
                <ul className='navbar'> 

                    <li><a  href="">Home</a></li>
                    <li><a  href="#about">About</a></li>
                    <li><a  href="#skills">Skills</a></li>
                    <li><a  href="#education">Education</a></li>
                    <li><a  href="#experience">Experience</a></li>
                    <li><a  href="#contact">Contact</a></li>
                </ul>
                </div>


        </div>
    )
}

export default Navbar;