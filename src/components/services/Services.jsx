import React from 'react'
import '../services/services.css'
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>User Research and Analysis</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>User Interface Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Usability Testing and Optimization</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Information Architecture and Navigation</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Front-End Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Back-End Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Full-Stack Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Management Systems (CMS)</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>E-Commerce Solutions</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web Performance Optimization</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Strategy</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Visual Content Creation</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Social Media Content</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Analytics and Optimization</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Mentorship and Support</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services