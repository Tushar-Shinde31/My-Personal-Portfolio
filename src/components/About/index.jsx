import React from 'react'
import './About.css'
// import Hole from "../../ui/Hole"
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="about">
       <div className="card section__wrapper">
        {/* <Hole/> */}
        <div className="column left-column">
          <h3 className='skill__title'></h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"}/>
        </div>
        <div className="column right-column">
          <h2 className='shine'>About Me</h2>
          <h1 className='title'>
            I am <span className='color__primary'>Tushar Shinde</span>
          </h1>
          <p className='text__muted description'>
          A passionate Software Developer and AI/ML Enthusiast with a strong foundation in full-stack development, DevOps, and AI technologies. I thrive on solving complex problems, optimizing performance, and building scalable applications. Beyond coding, I'm a tech enthusiast, problem solver, and creative artist, always eager to learn and collaborate. Let’s connect and build something amazing! 🚀
          </p>
        </div>
       </div>
    </section>
  )
}

export default About