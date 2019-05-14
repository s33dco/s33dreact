import React from 'react'
import ContactForm from './ContactForm'

const ContactPage = props => (
	<main>
		<h1>Get in touch.</h1>
		<ContactForm
			goHome={() => {
				props.history.push('/')
			}}
		/>
	</main>
)

export default ContactPage
