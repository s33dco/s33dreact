import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import ContactModal from './ContactModal'
import axios from 'axios'

const canSend = ({ name, nameError, email, emailError, message, messageError, isVerified }) => {
	if (name && !nameError && (email && !emailError) && (message && !messageError) && !!isVerified) {
		return false
	} else {
		return true
	}
}

export default class ContactForm extends React.Component {
	state = {
		name: '',
		message: '',
		email: '',
		nameError: '',
		emailError: '',
		messageError: '',
		isVerified: false,
		buttonText: 'Send Message',
		isSent: false,
		modalMessage: '',
		reply: ''
	}
	onNameChange = e => {
		const name = e.target.value
		if (name.match(/\w/)) {
			this.setState({ name })
			this.setState({ nameError: '' })
		} else {
			this.setState({ name })
			this.setState({ nameError: "Your name doesn't look right!" })
		}
	}
	onEmailChange = e => {
		const email = e.target.value
		if (email.match(/[\w-]+@([\w-]+\.)+[\w-]+/)) {
			this.setState({ email })
			this.setState({ emailError: '' })
		} else {
			this.setState({ email })
			this.setState({ emailError: 'sure about this email address?' })
		}
	}
	onMessageChange = e => {
		const message = e.target.value
		if (!message || !message.match(/\w/)) {
			this.setState({ message })
			this.setState({ messageError: 'Just use words please....' })
		} else {
			this.setState({ message })
			this.setState({ messageError: '' })
		}
	}
	recaptchaVerified = () => {
		this.setState({ isVerified: true })
	}
	onSubmit = e => {
		e.preventDefault()
		this.setState({ buttonText: '...sending' })

		const emailDetails = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message
		}

		axios
			.post('/.netlify/functions/send-email', emailDetails)
			.then(res => {
				this.setState({
					isSent: true,
					buttonText: 'message sent!',
					modalMessage: `${res.data.message}`,
					reply: `${res.data.reply}`
				})
			})
			.catch(e => {
				this.setState({
					isSent: true,
					buttonText: 'hmmm...',
					modalMessage: `${e.message}`,
					reply: `Sorry ${this.state.name} this isn't working, maybe you could try again?`
				})
			})
	}

	handleCloseContactModal = () => {
		this.setState({ isSent: false })
		this.props.goHome()
	}
	render() {
		return (
			<form className='contact-form' onSubmit={this.onSubmit}>
				<div className='text-field'>
					<input
						className={this.state.nameError ? 'error' : ''}
						type='text'
						placeholder='name'
						autoFocus
						value={this.state.name}
						onChange={this.onNameChange}
					/>
					{this.state.nameError && <p className='errorText'>{this.state.nameError}</p>}
				</div>
				<div className='text-field'>
					<input
						className={this.state.emailError ? 'error' : ''}
						type='email'
						placeholder='email'
						value={this.state.email}
						onChange={this.onEmailChange}
					/>
					{this.state.emailError && <p className='errorText'>{this.state.emailError}</p>}
				</div>
				<div className='text-area'>
					<textarea
						className={this.state.messageError ? 'error' : ''}
						placeholder='message'
						rows={6}
						value={this.state.message}
						onChange={this.onMessageChange}
					/>
					{this.state.messageError && <p className='errorText'>{this.state.messageError}</p>}
				</div>
				<div className='recaptcha-area'>
					<ReCAPTCHA
						sitekey='6Leo6DgUAAAAAPrzkoZ4rYYUVbUi6YxQakeuQAhb'
						onChange={this.recaptchaVerified}
						size='compact'
					/>
				</div>
				<div>
					<button disabled={canSend(this.state)}>{this.state.buttonText}</button>
				</div>
				<ContactModal
					isSent={this.state.isSent}
					handleCloseContactModal={this.handleCloseContactModal}
					message={this.state.modalMessage}
					reply={this.state.reply}
				/>
			</form>
		)
	}
}
