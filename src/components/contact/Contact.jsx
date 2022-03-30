import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'

/* email js */
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  /* EMAILJS FUNCTION */
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

      {/* Email */}
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kiis.veikko@gmail.com</h5>
            <a href="mailto:kiis.veikko@gmail.com" target="_blank">Send a Message</a>
          </article>

          {/* Messenger */}
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>kiis.veikko@gmail.com</h5>
            <a href="https://m.me/VeikkoKiis" target="_blank">Send a Message</a>
          </article>

          {/* Telegram */}
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Telegram mby</h4>
            <h5>kiis.veikko@gmail.com</h5>
            <a href="mailto:kiis.veikko@gmail.com" target="_blank">Send a Message</a>
          </article>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='emaiol' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact