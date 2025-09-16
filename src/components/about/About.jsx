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
              <small>2+ Year of Experience</small>
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
          <p>Hi, I’m Akshay — a MERN Stack Developer
With 2+ years of experience building end-to-end web applications, I specialize in MongoDB, Express.js, React, and Node.js. I design and implement scalable REST APIs, craft responsive UIs, and integrate features like JWT authentication, Redux Toolkit state management, real-time messaging with Socket.IO, and secure payment gateways. Passionate about clean architecture and cloud deployment on Vercel and AWS, I thrive on delivering production-ready, high-performance solutions.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About