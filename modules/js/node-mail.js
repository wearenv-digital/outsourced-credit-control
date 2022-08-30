"use strict";

const nodemailer = require("nodemailer");

async function main() {
	// generate test smtp service account
	// from ethereal mail
	let testAccount = await nodemailer.createTestAccount();

	let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false,

		auth: {
			user: testAccount.user, //generated user
			pass: testAccount.pass, //test pass
		},
	});

	transporter.verify(function (error, success) {
		if (error) {
			console.log(error);
		} else if (success) {
			console.log("Server is ready to take messages");
		}
	});

	//send mail with defined transport object

	let info = await transporter.sendMail({
		from: "Test Account, <test@test.com>",
		to: "receiving test, <test@anothertest.com>",
		subject: "Does it work?",
		text: "Hello OCC!",
		html: "<b>Hello OCC!</b>",
	});

	console.log("message sent: %s", info.message);

	console.log("preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
