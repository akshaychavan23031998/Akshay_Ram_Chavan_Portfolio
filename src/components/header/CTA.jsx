import React from 'react'
import Akshay_Ram_Chavan from '../../assets/Akshay_Ram_Chavan.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={Akshay_Ram_Chavan} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA