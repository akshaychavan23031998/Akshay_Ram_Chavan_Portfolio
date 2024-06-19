import React from 'react'
import '../header/header.css'
import CTA from './CTA'
import photo from '../../assets/photo.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className='container header_container'>
            <h5>Hello I'm</h5>
            <h1>Akshay Chavan</h1>
            <h5 className='text-light'> Front End Developer 👩‍💻👩‍💻</h5>
            <CTA/>
            <HeaderSocials />
            <div className='me'>
                <img src={photo} alt='me'/>
            </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header