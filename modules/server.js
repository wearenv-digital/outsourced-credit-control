const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 7500;

// MIDDLEWARE

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
	//res.send("Hello World!");
	res.sendFile(__dirname + '/public/contactform.html');
});

app.post('/', (req, res) => {
	console.log(req.body);

	const transporter = nodemailer.createTransport({
		host: 'smtp.mailtrap.io',
		port: 2525,
		auth: {
			user: '422966c143798e',
			pass: 'ffdcb1ebc761ac',
		},
	});
	const mailOptions = {
		from: req.body.email,
		to: 'info@outsourcedcreditcontrol.co.uk',
		subject: `Message from ${req.body.email} about ${req.body.service}`,
		text: `Message from: ${req.body.name}
		Email: ${req.body.email}.
		Tel no: ${req.body.telephone}.
		Service required: ${req.body.service}. 
		Message: ${req.body.message}.
		Consent: ${req.body.consent}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.send('error');
		} else {
			console.log('Email sent' + info.response);
			res.send('success');
		}
	});
});

app.listen(PORT, () => {
	console.log(`server running on port ${PORT} `);
});
