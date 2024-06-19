import React from 'react'
import '../portfolio/portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/portfolio4.png'
import img5 from '../../assets/portfolio5.jpg'
import img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:img1,
    title:"GIPHY - Be Animated",
    technology:"React.js, API, Tailwind CSS",
    github: "https://github.com/akshaychavan23031998/Giphy_Clone",
    demo: "https://giphy-clone-eight.vercel.app/"
  },
  {
    id:2,
    image:img2,
    title:"Netflix GPT",
    technology:"React.js, Redux, API, Tailwind CSS",
    github: "https://github.com/akshaychavan23031998/Netflix_GPT",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7195680737310703617/"
  },
  {
    id:3,
    image:img3,
    title:"OCHI - Presentation design agency",
    technology:"React.js, Framer Motion, Tailwind CSS",
    github: "https://github.com/akshaychavan23031998/ochi_clone",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7192917938465611776/"
  },
  {
    id:4,
    image:img4,
    title:"Obys Agency",
    technology:"HTML, CSS, JavaScript, GSAP, Locomotive.js, ScrollTrigger",
    github: "https://github.com/akshaychavan23031998/Obys-Agency",
    demo: "https://akshaychavan23031998.github.io/Obys-Agency/"
  },
  {
    id:5,
    image:img5,
    title:"Sundown Studio",
    technology:"HTML, CSS, JavaScript, GSAP, Locomotive.js, ScrollTrigger",
    github: "https://github.com/akshaychavan23031998/sundown-clone",
    demo: "https://akshaychavan23031998.github.io/sundown-clone/"
  },
  {
    id:6,
    image:img6,
    title:"lazarev. — digital product design agency",
    technology:"HTML, CSS, JavaScript, GSAP, Locomotive.js, ScrollTrigger",
    github: "https://github.com/akshaychavan23031998/lazarev_clone",
    demo: "https://akshaychavan23031998.github.io/lazarev_clone/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, technology, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio