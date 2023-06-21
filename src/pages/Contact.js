import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import {Navbar,Sidebar,Footer, Alert} from '../components'
import {useNavigate} from 'react-router-dom'
import {UseAppContext} from '../context/appContext'

const initialState = {
    from_name:'',
    from_email:'',
    message:''
  }

const Contact = () => {
  const [values, setValues]=useState(initialState)
  const {showAlert, displayAlert,replyMessageSuccess} = UseAppContext()
  const navigate = useNavigate()
  //handleChange
  const handleChange = (e)=>{
    setValues({...values, [e.target.name]:e.target.value})
  }

  /* emailjs */
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const {from_name, from_email, message}=values
    if(!from_name || !from_email || !message){
      displayAlert()
      return
    }
    else{
      replyMessageSuccess()
      emailjs.sendForm('service_loyatsk', 'template_jdnr72g', form.current, 'EfcaVCTSmZFOsd7ZK')
        .then((result) => {
            console.log(result.text);
            navigate('/')
        }, (error) => {
            console.log(error.text);
        });
    }
  };
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <section className="section projects-page contact-bcg">
        <div className="section-title projects-title">
          {showAlert && <Alert/>}
          <h2>contact</h2>
          <div className="underline"></div>
          <div className="section-center">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" value={values.from_name} onChange={handleChange} placeholder='name'/>
                <input type="email" name="from_email" value={values.from_email} onChange={handleChange}  placeholder='email'/>
                <textarea name="message" value={values.message} onChange={handleChange} placeholder='message' cols="30" rows="5"></textarea>
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
