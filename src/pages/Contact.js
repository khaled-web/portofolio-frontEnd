import React from 'react'
import {Navbar,Sidebar,Footer} from '../components'
const Contact = () => {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <section className="section projects-page page-100">
        <div className="section-title projects-title">
          <h2>contact</h2>
          <div className="underline"></div>
          <div className="section-center">
              <form>
                <input type="text" className='contact-firstName' placeholder='name'/>
                <input type="email" className='contact-email' placeholder='email'/>
                <textarea name="comments" className='contact-textArea' placeholder='Your message' id="" cols="30" rows="5"></textarea>
                <button type='submit' className='contact-submit'>
                  send message
                </button>
              </form>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default Contact
