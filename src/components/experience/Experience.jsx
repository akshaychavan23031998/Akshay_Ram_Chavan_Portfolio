import React from 'react';
import '../experience/experience.css';
import { BsPatchCheckFill } from "react-icons/bs";

const skillsData = {
  frontend: [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "Tailwind CSS", level: "Experienced" },
    { name: "JavaScript", level: "Experienced" },
    { name: "React JS", level: "Experienced" },
    { name: "Redux Toolkit", level: "Experienced" },
  ],
  backend: [
    { name: "Node JS", level: "Experienced" },
    { name: "Express JS", level: "Experienced" },
    { name: "Mongo DB", level: "Experienced" },
    { name: "Java", level: "Basic" },
    { name: "My SQL", level: "Basic" },
  ]
};

const Experience = () => {
  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <article key={index} className='experience_details'>
        <BsPatchCheckFill className='experience_details-icon' />
        <div>
          <h4>{skill.name}</h4>
          <small className='text-light'>{skill.level}</small>
        </div>
      </article>
    ));
  };

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            {renderSkills(skillsData.frontend)}
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            {renderSkills(skillsData.backend)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
