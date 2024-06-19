import React from 'react';
import '../contact/contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const notifySuccess = () => toast.success("Hey, I Will Get Back To You Soon", {position:"bottom-right"});
  const notifyError = () => toast.error("Failed to send message, Let's Connect on call", {position:"bottom-right"});

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.init({publicKey: process.env.REACT_APP_PUBLIC_KEY});
  //   emailjs.sendForm(
  //     process.env.REACT_APP_SERVICE_ID,
  //     process.env.REACT_APP_TEMPLATE_ID,
  //     form.current
  //   )
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //         notifySuccess();
  //         e.target.reset();
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //         notifyError();
  //       },
  //     );
  //   console.log(form.current);
  // };

  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.init(process.env.REACT_APP_PUBLIC_KEY);

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current
    )
    .then(
      () => {
        console.log('SUCCESS!');
        notifySuccess();
        e.target.reset();
      },
      (error) => {
        console.log('FAILED...', error?.text || error);
        notifyError();
      },
    );
    console.log(form.current);
  };
  return (
    <section id='contact'>
      <ToastContainer />
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Gmail</h4>
            <h5>akshayrchavan07@gmail.com</h5>
            <a href='mailto:akshayrchavan07@gmail.com'>Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Akshay Chavan</h5>
            <a href='https://m.me/aksay.chavanaaa' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8180004924</h5>
            <a href='https://api.whatsapp.com/send?phone=918180004924' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Enter Your Name' required/>
          <input type='email' name='email' placeholder='Enter Your Email' required/>
          <textarea name='message' rows="7" placeholder='Enter Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
