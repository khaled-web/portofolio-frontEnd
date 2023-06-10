import React from 'react'
import {services} from '../utils/links'

const Services = () => {
  return (
   <section className="section services bg-grey">
    <div className="section-title services-title">
     <h2>services</h2>
     <div className="underline"></div>
    </div>
    <div className="services-container">
     {
      services.map((service)=>{
       const {id,icon, title,subject,style}=service
       return(
        <article key={id} className={`service-item ${style}`}>
         <div className="front-text">
          {icon}
          <h1>{title}</h1>
         </div>
         <div className="back-text">
          <h1>{title}</h1>
          <p>
           {subject}
          </p>
          <a href="/projects" className='btn'> more details</a>
         </div>
        </article>
       )
      })
     }
    </div>
   </section>
  )
}

export default Services
