import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { IoLogoWhatsapp } from "react-icons/io";
import React,{useRef} from 'react' ;
import './ContactUs.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cgqgv3f', 'template_7vdcbi7', form.current, 'tpoQYrbbyqt2mz_UL')
      
    e.target.reset()
  };

  return (
    <section id = 'contact'>
      
      <div className="container contact__container">
        <div className="contact__options">
            <article  className="contact__option">
              <MdEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>asoltanian76@gmail.com</h5>
              <a href="mailto:asoltanian76@gmail.com" target='_blank'>Send </a>
            </article>
            <article className="contact__option">
              <FaTelegramPlane className='contact__option-icon' />
              <h4>telegram</h4>
              <h5>@ali76rez</h5>
              <a href="https://t.me/ali76rez" target='_blank'>Send </a>
            </article>
            <article  className="contact__option">
              <IoLogoWhatsapp  className='contact__option-icon' />
              <h4>Whatsapp</h4>
              <h5>number</h5>
              <a target='_blank' href="https://api.whatsapp.com/send?phone=1XXXXXXXXXX">Send </a>
            </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail} >
          <TextField variant="outlined" type="text" name="name" label='Your Full Name'  />
          <TextField type="email" variant="outlined" name='Email' label='Your Email' />
          <TextField multiline minRows={4} variant="outlined" name="message"  label='Your Message'></TextField>
          <button   type='submit' className='btnSubmit'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact