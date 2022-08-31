var path = require("path");
const express = require("express");
const app = express();
require("dotenv").config();
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");

const PORT = process.env.PORT || 5500; // CHANGE TO WHATEVER
// middleware

app.route("/").get(function (req, res) {
	res.sendFile(process.cwd() + "/html/index.html");
});

// var htmlPath = path.join(__dirname, "html/");
// app.use(express.static("html"));
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, "/html")));
// app.use(express.static(htmlPath));
app.use(express.json());

// app.get("/", (req, res) => {
// 	// res.send("Hello");
// 	res.send(__dirname + "/html");
// });
// var entirePath =

// app.get("/", (req, res) => {
// 	res.sendFile(htmlPath + "/index.html");
// });

// app.get("/about", (req, res) => {
// 	res.sendFile(htmlPath + "/about.html");
// });

// app.get("/contact", (req, res) => {
// 	res.sendFile(htmlPath + "/contact.html");
// });

// app.get("/cost-reduction-managment-better", (req, res) => {
// 	res.sendFile(htmlPath + "/cost-reduction-managment-better.html");
// });

// app.get("/credit-checking-better", (req, res) => {
// 	res.sendFile(htmlPath + "/credit-checking-better.html");
// });

// app.get("/credit-control-tips", (req, res) => {
// 	res.sendFile(htmlPath + "/credit-control-tips.html");
// });

// app.get("/credit-management-health-checks", (req, res) => {
// 	res.send(htmlPath + "/credit-management-health-checks.html");
// });

// app.get("/debt-recovery-collcection-better", (req, res) => {
// 	res.sendFile(htmlPath + "/debt-recovery-collection-better.html");
// });

// app.get("/late-paymemt-calculator", (req, res) => {
// 	res.sendFile(htmlPath + "late-paymemt-calculator.html");
// });

// app.get("/late-payment-letter-templates", (req, res) => {
// 	res.sendFile(htmlPath + "/late-payment-letter-templates.html");
// });

// app.get("/letter-before-action-checklist", (req, res) => {
// 	res.sendFile(htmlPath + "/letter-before-action-checklist.html");
// });

// app.get("/links", (req, res) => {
// 	res.sendFile(htmlPath + "/links.html");
// });

// app.get("/outsourced-credit-control", (req, res) => {
// 	res.sendFile(htmlPath + "/outsourced-credit-control.html");
// });

// app.get("/privacy-policy", (req, res) => {
// 	res.sendFile(htmlPath + "/privacy-policy.html");
// });

// app.get("/process-improvement", (req, res) => {
// 	res.sendFile(htmlPath + "/process-improvement.html");
// });

// app.get("/resources", (req, res) => {
// 	res.sendFile(htmlPath + "/resources.html");
// });

// app.get("/terms-and-conditions", (req, res) => {
// 	res.sendFile(htmlPath + "/terms-and-conditions.html");
// });

// app.get("/training-and-consultancy-better", (req, res) => {
// 	res.sendFile(htmlPath + "/training-and-consultancy-better.html");
// });

app.post("/", (req, res) => {
	const transporter = nodemailer.createTransport({
		service: "smtp.ionos.co.uk",
		host: "smtp.ionos.co.uk",
		port: 587,
		secure: false,
		auth: {
			user: "enquiries@outsourcedcreditcontrol.co.uk",
			pass: "Fred1106!",
		},
	});
	const mailOptions = {
		from: req.body.email,
		to: "info@outsourcedcreditcontrol.co.uk",
		subject: `Message from ${req.body.email} about ${req.body.service}`,
		text: `Message from: ${req.body.name}
		Email: ${req.body.email}.
		Tel no: ${req.body.telephone}.
		Servive required: ${req.body.service}. 
		Message: ${req.body.message}.
		Consent: ${req.body.consent}`,
	};
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			var err = new Error();
			console.log(error);
			console.log(err.stack);
			res.send("error");
		} else {
			console.log("Email sent" + info.res);
			res.send("Success");
		}
	});
});

app.listen(PORT, () => {
	console.log(`server running on ports ${PORT}`);
});
