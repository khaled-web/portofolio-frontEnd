import React from 'react'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLaptopCode,
  FaServer,
  FaTools,
  FaTasks
}
from 'react-icons/fa'
import img01 from '../assets/images/LayalinaCoffe-imag.jpeg'
import img02 from '../assets/images/RightCars-Skills.jpeg'
import img03 from '../assets/images/CozyHouse.jpeg'
import img04 from '../assets/images/SandraTours-1.jpg'

export const links = [{
    id: 1,
    text: 'Home',
    path: '/'
  },
  {
    id: 2,
    text: 'About',
    path: '/about'
  },
  {
    id: 3,
    text: 'Projects',
    path: '/projects',
  },
  {
    id: 4,
    text: 'Contact',
    path: '/contact',
  }
]

export const SocialMedia = [{
    id: 1,
    url: 'https://www.facebook.com/',
    icon: < FaFacebookSquare/>
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/',
    icon: < FaLinkedin/>
  },
  {
    id: 3,
    url: 'https://www.twitter.com/',
    icon: < FaTwitterSquare/>
  },
  {
    id: 4,
    url: 'https://www.instagram.com/',
    icon: < FaInstagramSquare/ >
  },
]

export const services = [
{
  id: 1,
  title: "Front-End Development",
  subject: "Developing and implementing highly responsive user interface components using react concepts.",
  icon:<FaLaptopCode/>,
  style:'service-item-black'
},  
{
  id: 2,
  title: "Back-End Development",
  subject: "Knowledge of backend technologies and database systems using Node.js and MongoDB.",
  icon:<FaServer/>,
  style:'service-item-white'
},
{
  id:3,
  title:'Testing',
  subject:'Knowledge of performance testing frameworks including Mocha and Jest.',
  icon:<FaTools/>,
  style:'service-item-black'
},
{
  id:4,
  title:'Maintenance',
  subject:'Troubleshooting interface software and debugging application codes.',
  icon:<FaTasks/>,
  style:'service-item-white'
}]

export const projects = [
  {
    id:1,
    style:'project-1',
    img:img01,
    title:'Layalina Coffee',
    owner:'Ishaaq Ghawer'
  },
  {
    id:2,
    style:'project-2',
    img:img02,
    title:'RightCars Agency',
    owner:'Dorian Aron',
  },
  {
    id:3,
    style:'project-3',
    img:img03,
    title:'CozyHouse',
    owner:'Tolstoy Leo'
  },
  {
    id:4,
    style:'project-4',
    img:img04,
    title:'Sandra Tours',
    owner:'Sandra Madyan'
  }
]