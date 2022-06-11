import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {SiTwitter} from 'react-icons/si'
import {SiLinkedin} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9knspqp', 'template_qiu3bai', form.current, 'CLrxgCASq9din9yEK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5> 
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lalitkumarsharma.jsr@gmail.com</h5>
            <a href="mailto:lalitkumarsharma.jsr@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className='contact__option'>
            <SiTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>lalitkrsharma_</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=1522493833598042112" target="_blank">
              Send a Message
            </a>
          </article>

          <article className='contact__option'>
            <SiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>lalitkrsharma</h5>    
            <a href="https://www.linkedin.com/messaging/thread/new/?recipient=lalitkrsharma" target='_blank'>
              Send a message
            </a>        
                        
          
          </article>  

        </div>
         {/* End Of Contact */}

         <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact