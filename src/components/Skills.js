import React from 'react'
import {skills} from '../utils/links'
const Skills = () => {
  return (
   <section className="section skills">
    <div className="section-title skills-title">
     <h2>skills</h2>
     <div className="underline"></div>
    </div>
    <div className="section-center skills-center">
     {skills.map((i)=>{
      const {title, tools} = i
      return(
       <article>
        <h3>{title}</h3>
        {tools.map((t)=>{
         return(
          <div className="skill">
           <p>{t}</p>
           <div className="skill-container">
            <div className="skill-value value-100"></div>
            <p className='skill-text skill-text-100'></p>
           </div>
          </div>
         )
        })}
       </article>
      )
     })}
    </div>
   </section>
  )
}

export default Skills
