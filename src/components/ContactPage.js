import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = (props) => (
  <main>
    <h1>Get in touch.</h1>
    <ContactForm
      onSubmit={(email) => {
        console.log(email);
        console.log('now send email')
      }}
      goHome={() => {
        props.history.push('/')
        }
      }
      />
  </main>
)

export default ContactPage;
