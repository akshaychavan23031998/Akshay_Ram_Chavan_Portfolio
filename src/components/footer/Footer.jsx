import React from 'react'
import '../footer/footer.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>AKSHAY</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://github.com/akshaychavan23031998' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/akshay-chavan23/'  target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
        <a href='https://x.com/AkshayC23480775'  target='_blank' rel='noopener noreferrer'><BsTwitterX /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Akshay Chavan. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer