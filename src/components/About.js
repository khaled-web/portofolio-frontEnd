import React from 'react'
import AboutImg from '../assets/images/About-me.jpg'

const About = () => {
  return (
  <section className='section about'>
   <div className="section-center about-center">
    <article className='about-img'>
     <img src={AboutImg} alt="about" className='about-photo'/>
    </article>
    <article className='about-info'>
    <div className="section-title about-title">
     <h2>about</h2>
     <div className="underline"></div>
    </div>
    <p>
     I’m a Freelance Full-Stack Web Developer located in Egypt. I have a serious passion for UI effects, animations, and creating intuitive, dynamic user experiences,I have perfect knowledge of backend technologies, Additionally, I have experience with database systems that will ensure the smooth operation of  application project.
    </p>
    <p>
    Well-organized person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series. A family person and father of two wonderful children,
    </p>
    <p>
    Interested in the entire Full-Stack spectrum and working on ambitious projects with positive people.
    </p>

    <p>

    </p>
    </article>
   </div>
  </section>
  )
}

export default About
