import React from "react"
import Modal from "react-modal"

Modal.setAppElement("#app")

const ContactModal = props => (
	<Modal
		isOpen={props.isSent}
		onRequestClose={props.handleCloseContactModal} // escape key or click background to close
		contentLabel='thanks for your message.'
		closeTimeoutMS={200}
		className='modal'
	>
		<h3 className='modal__title'>thanks for your message {props.name}</h3>
		<p>We'll get back to you soon...</p>
		<button className='button' onClick={props.handleCloseContactModal}>
			close
		</button>
	</Modal>
)
export default ContactModal
