import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r71p4lm', 'template', form.current, '')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>tagsxa@yahoo.com</h5>
            <a href='mailto:tagsxa@yahoo.com' target="_blank" rel="noopener noreferrer">Send me an eMail</a>
          </article>
            <article className='contact_option'>
            <FaLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Mark Battaglia</h5>
            <a href='https://www.linkedin.com/in/mark-battaglia-0990a08/' target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='contact_option'>
            <TfiYoutube className='contact_option-icon'/>
            <h4>YouTube</h4>
            <h5>TagsxA</h5>
            <a href='https://www.youtube.com/channel/UCPeoNCvfJp74h8ROB-k-Ykw' target="_blank" rel="noopener noreferrer">Visit My Page</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder="Type your message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact