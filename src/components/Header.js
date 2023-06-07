import React from 'react'
import {Link} from 'react-router-dom'
import {SocialMedia} from '../utils/links'
import heroImg from '../assets/images/khaled-hero.jpg'
import Wrapper from '../assets/wrappers/HeaderStyled'

const Header = () => {
  return (
  <Wrapper className='hero'>
   <div className="section-center hero-center">
    <article className='hero-info'>
     <div className="underline"></div>
     <h1>I'm Khaled</h1>
     <h4>Freelance Full-Stack Web Developer</h4>
     <Link to='/contact' className='btn hero-btn'>hire me</Link>

     <ul className='social-icons'>
      {SocialMedia.map((i)=>{
       const {id, url, icon}=i
       return(
        <li key={id}>
         <a href={url} target="_blank" className="social-icon">{icon}</a>
        </li>
       )
      })}
     </ul>
    </article>
    <article className='hero-img'>
     <img src={heroImg} alt="hero" className='hero-photo'/>
    </article>
   </div>
   
  </Wrapper>
  )
}

export default Header
