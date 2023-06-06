import React from 'react'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare
}
from 'react-icons/fa'

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

export const SocialMedia = [
{
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
  icon: < FaInstagramSquare/>
},
]