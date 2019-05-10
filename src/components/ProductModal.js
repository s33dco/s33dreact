import React from 'react'
import Modal from 'react-modal'
import Paragraph from './Paragraph'

Modal.setAppElement('#app')

// Component for paras

const ProductModal = props => (
	<Modal
		isOpen={props.isOpen}
		onRequestClose={props.willClose} // escape key or click background to close
		contentLabel={props.name}
		closeTimeoutMS={200}
		className='modal'
	>
		<h3 className='modal__title'>{props.name}</h3>
		<div>
			{props.paras.length === 0
				? null
				: props.paras.map((para, index) => {
						return <Paragraph key={index} para={para} />
				  })}
		</div>
		<button className='button' onClick={props.willClose}>
			close
		</button>
	</Modal>
)
export default ProductModal
