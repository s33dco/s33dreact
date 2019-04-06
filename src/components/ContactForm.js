import React from 'react';

const canSend = ({name, nameError, email, emailError, message, messageError}) => {
  if ((name && !nameError) && (email && !emailError) && (message && !messageError)){
    return false
  } else {
    return true
  }
}


export default class ContactForm extends React.Component{

  state = {
    name: '',
    message: '',
    email: '',
    nameError: '',
    emailError: '',
    messageError: '',
    sent: false,
    buttonText: 'Send Message'
  }
  onNameChange = (e) => {
    const name = e.target.value;
    if (name.match(/\w/)){
      this.setState({name})
      this.setState({nameError : ''})
    } else {
      this.setState({name})
      this.setState({nameError : "Your name doesn't look right!"})
    }
  }
  onEmailChange = (e) => {
    const email = e.target.value;
    if (email.match(/[\w-]+@([\w-]+\.)+[\w-]+/)){
      this.setState({email})
      this.setState({emailError : ''})
    } else {
      this.setState({email})
      this.setState({emailError : "sure about this email address?"})
    }
  }
  onMessageChange = (e) => {
    const message = e.target.value;
    if (!message || !message.match(/\w/)){
      this.setState({message})
      this.setState({messageError : "Just use words please...."})
    } else {
      this.setState({message})
      this.setState({messageError : ''})
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
        buttonText: '..sending'
      });
    this.props.onSubmit({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
  };
  render(){
    return(
      <form
        className="contact-form"
        onSubmit={this.onSubmit}
      >
        <div className="text-field">
          <input
            className={this.state.nameError ? 'error' : ''}
            type='text'
            placeholder='your name'
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
          />
          {this.state.nameError && <p className='errorText'>{this.state.nameError}</p>}
        </div>
        <div className="text-field">
          <input
            className={this.state.emailError ? 'error' : ''}
            type='email'
            placeholder='your email address'
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          {this.state.emailError && <p className='errorText'>{this.state.emailError}</p>}
        </div>
        <div className="text-area">
          <textarea
            className={this.state.messageError ? 'error' : ''}
            placeholder="leave your message"
            rows={6}
            value={this.state.message}
            onChange={this.onMessageChange}
          />
          {this.state.messageError && <p className='errorText'>{this.state.messageError}</p>}
        </div>

        <div>
          <button
            disabled={canSend(this.state)}
          >
            {this.state.buttonText}
          </button>
        </div>
      </form>
    )
  }
}
