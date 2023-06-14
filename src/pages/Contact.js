import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import {Navbar,Sidebar,Footer} from '../components'
const Contact = () => {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [message, setMessage]=useState('')

  /* emailjs */
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_loyatsk', 'template_jdnr72g', form.current, 'EfcaVCTSmZFOsd7ZK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <section className="section projects-page page-100">
        <div className="section-title projects-title">
          <h2>contact</h2>
          <div className="underline"></div>
          <div className="section-center">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder='name'/>
                <input type="email" name="from_email" placeholder='email'/>
                <textarea name="message" placeholder='Your message' id="" cols="30" rows="5"></textarea>
                <input type="submit" value="Send" className='contact-send'/>
              </form>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default Contact
