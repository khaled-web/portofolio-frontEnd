//..........
//importing
//..........
import React,{useState} from 'react'
import {UseAppContext} from '../context/appContext.js'
import logo from '../assets/images/khaled_logo.png'
import Wrapper from '../assets/wrappers/Navbar.js'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {links} from '../utils/links.js'


//..........
//App
//..........
const Navbar = () => {
  return(
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img src={logo} className='nav-logo' alt="logo" />
          </Link>
          <button type='button' className='nav-btn'>
            <FaBars/>
          </button>
        </div>
        <ul className='nav-links'>
          {
            links.map((i)=>{
              const {id, text, path} = i
              return(
                <li key={id}>
                  <a href={path}>{text}</a>
                </li>
              )
            })
          }
        </ul>

        </div>
    </Wrapper>
  )
}
//..........
//exporting
//..........
export default Navbar
