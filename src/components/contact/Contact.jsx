import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import AnimatedButton from './SendButton.js'
import socialsItems from './contactItems';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e6c211p', 'template_cnr57gj', form.current, 'iKSWrwILeomgi7IYC')
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
        <div className="contact__options">
          {
            socialsItems.map(({ name, desc, href, icon }, index) => {
              const Icon = icon;
              return (
                <article key={index} className="contact__option">
                  <Icon className='contact__option-icon' />
                  <h4>{name}</h4>
                  <h5>{desc}</h5>
                  <a href={href}>Send a Message</a>
                </article>
              )
            })
          }
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" id='name' placeholder='Your Name' required />
          <input type="email" id='email' placeholder='Your Email' required />
          <textarea id="message" rows="7" placeholder='Your Message' required></textarea>
          <AnimatedButton/>
        </form>
      </div>
    </section>
  )
}

export default Contact