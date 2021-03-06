import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#app')

const ContactModal = props => (
	<Modal
		isOpen={props.isSent}
		onRequestClose={props.handleCloseContactModal} // escape key or click background to close
		contentLabel='thanks for your message.'
		closeTimeoutMS={200}
		className='modal'
	>
		<h3 className='modal__title'>{props.message}</h3>
		<p>{props.reply}</p>
		<button className='button__contact__modal' onClick={props.handleCloseContactModal}>
			close
		</button>
	</Modal>
)
export default ContactModal
