// const sgMail = require('@sendgrid/mail')
const nodemailer = require('nodemailer')

// exports.handler = (event, context, callback) => {
// 	const { API_KEY, SEND_TO } = process.env

// 	sgMail.setApiKey(API_KEY)

// 	const { name, email, message } = JSON.parse(event.body)

// 	const msg = {
// 		to: SEND_TO,
// 		from: SEND_TO,
// 		subject: `${name} has contacted you from the website...`,
// 		text: `${message}`,
// 		html: `<p>reply to : ${email}</p><p>${message}</p>`
// 	}

// 	const transporter = nodemailer.createTransport({
// host: "",
// port: "",
// secure: false,
// 	service: 'FastMail', // no need to set host or port etc.
// 	auth: {
// 		user: 'imarley@warpmail.net',
// 		pass: '45mg9la8g649e2n9'
// 	}
// })

// transporter
// 	.sendMail(msg)
// 	.then(res => {
// 		callback(null, {
// 			statusCode: 200,
// 			body: JSON.stringify({
// 				message: `thanks for your email ${name}`,
// 				reply: "We'll get back to you soon..."
// 			})
// 		})
// 	})
// 	.catch(e => {
// 		callback({
// 			statusCode: 500,
// 			body: JSON.stringify({
// 				message: `We're sorry ${name}`,
// 				reply: "We can't send your message at the moment, can you give it another shot?"
// 			})
// 		})
// 	})

// sgMail
// 	.send(msg)
// 	.then(res => {
// 		callback(null, {
// 			statusCode: 200,
// 			body: JSON.stringify({
// 				message: `thanks for your email ${name}`,
// 				reply: "We'll get back to you soon..."
// 			})
// 		})
// 	})
// 	.catch(e => {
// 		callback({
// 			statusCode: 500,
// 			body: JSON.stringify({
// 				message: `We're sorry ${name}`,
// 				reply: "We can't send your message at the moment, can you give it another shot?"
// 			})
// 		})
// 	})
// }

exports.handler = function(event, context, callback) {
	const { API_KEY, SEND_TO, USER } = process.env

	const { name, email, message } = JSON.parse(event.body)

	let transporter = nodemailer.createTransport({
		service: 'FastMail', // no need to set host or port etc.
		auth: {
			user: USER,
			pass: API_KEY
		}
	})

	transporter.sendMail(
		{
			to: SEND_TO,
			from: SEND_TO,
			subject: `${name} has contacted you from the website...`,
			text: `${message}`,
			html: `<p>reply to : ${email}</p><p>${message}</p>`
		},
		function(error, info) {
			if (error) {
				callback({
					statusCode: 500,
					body: JSON.stringify({
						message: `We're sorry ${name}`,
						reply: "We can't send your message at the moment, can you give it another shot?"
					})
				})
			} else {
				callback(null, {
					statusCode: 200,
					body: JSON.stringify({
						message: `thanks for your email ${name}`,
						reply: "We'll get back to you soon..."
					})
				})
			}
		}
	)
}
