import React from 'react'
import '../about/about.css'
import photo3 from '../../assets/photo3.png'
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { PiFoldersFill } from "react-icons/pi";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_image'>
          <img src={photo3} alt='about image'/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Year of Experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className='about_card'>
              <PiFoldersFill className='about_icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>Hi, I'm Akshay, a Front-End Developer with 1 year of experience in creating dynamic, responsive websites using HTML, CSS, JavaScript, React.js, and Redux. I enhance web interactions with GSAP, ScrollTrigger, and Locomotive.js. Passionate about design and user experience, I strive to write clean, efficient code and solve problems creatively. Let's collaborate on something amazing!</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About