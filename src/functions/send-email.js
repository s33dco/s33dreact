const sgMail = require('@sendgrid/mail')

exports.handler = (event, context, callback) => {
	const { API_KEY, SEND_TO } = process.env

	sgMail.setApiKey(API_KEY)

	const { name, email, message } = JSON.parse(event.body)

	const msg = {
		to: SEND_TO,
		from: SEND_TO,
		subject: `${name} has contacted you from the website...`,
		text: `${message}`,
		html: `<p>reply to : ${email}</p><p>${message}</p>`
	}
	sgMail
		.send(msg)
		.then(res => {
			callback(null, {
				statusCode: 200,
				body: JSON.stringify({
					message: `thanks for your email ${name}`,
					reply: "We'll get back to you soon..."
				})
			})
		})
		.catch(e => {
			callback({
				statusCode: 500,
				body: JSON.stringify({
					message: `We're sorry ${name}`,
					reply: "We can't send your message at the moment, can you give it another shot?"
				})
			})
		})
}
