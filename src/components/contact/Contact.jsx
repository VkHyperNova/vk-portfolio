import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import AnimatedButton from './SendButton.js'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e6c211p', 'template_cnr57gj', form.current, 'OwEFJ_V9Wg0AgAF55')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' id='name' placeholder='Your Name' required />
          <input type="email" name='email'  id='email' placeholder='Your Email' required />
          <textarea name="message" id="message" rows="7" placeholder='Your Message' required></textarea>
          <AnimatedButton/>
        </form>
      </div>
    </section>
  )
}

export default Contact