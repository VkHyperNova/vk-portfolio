import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { SiTelegram } from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import AnimatedButton from './SendButton.js'

const socials = [
  {
    name: 'Email',
    desc: 'kiis.veikko@gmail.com',
    href: 'mailto:kiis.veikko@gmail.com',
    icon: MdOutlineEmail
  },
  {
    name: 'Messenger',
    desc: 'fb messenger',
    href: 'https://m.me/VeikkoKiis',
    icon: RiMessengerLine
  },
  {
    name: 'Telegram',
    desc: 'telegram link',
    href: 'mailto:kiis.veikko@gmail.com',
    icon: SiTelegram
  }
]

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
            socials.map(({ name, desc, href, icon }, index) => {
              const Icon = icon;
              return (
                <article key={index} className="contact__option">
                  <Icon className='contact__option-icon' />
                  <h4>{name}</h4>
                  <h5>{desc}</h5>
                  <a href={href} target="_blank">Send a Message</a>
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