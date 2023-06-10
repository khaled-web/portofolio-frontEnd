import React from 'react'
import {
  Navbar,
  Sidebar,
  Header,
  About,
  Services,
  Projects
} from '../components'

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <Header/>
      <About/>
      <Services/>
      <Projects/>
    </main>
  )
}

export default Home
