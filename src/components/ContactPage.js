import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = (props) => (
  <div>
    <h1>Get in touch.</h1>
    <ContactForm
      onSubmit={(email) => {
        console.log(email);
        // props.history.push('/');
      }}/>
  </div>
)

export default ContactPage;
