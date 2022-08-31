var path = require("path");
const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5500; // CHANGE TO WHATEVER
// middleware
var htmlPath = path.join(__dirname, "html");
app.use(express.static("public"));
app.use(express.static(htmlPath));
app.use(express.json());

app.get("/", (req, res) => {
	// res.send("Hello");
	res.sendFile(__dirname + "/public/contactform.html");
});

app.post("/", (req, res) => {
	console.log(req.body);

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
			console.log("Email sent" + info.response);
			res.send("Success");
		}
	});
});

app.listen(PORT, () => {
	console.log(`server running on ports ${PORT}`);
});
