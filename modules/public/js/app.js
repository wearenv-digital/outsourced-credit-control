//console.log("Hello");

const contactForm = document.querySelector('.contact-form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const telephoneInput = document.querySelector('#telephone');
const serviceChoice = document.querySelector('#service-list');
const messageInput = document.querySelector('#your-message');
const consentInput = document.querySelector('#consent-button');

// const checkName = () => {
// 	let valid = false;

// 	const firstName = nameInput.value.trim();

// 	if (!isRequired(firstName)) {
// 		showError(nameInput, 'First name cannot be left blank');
// 	} else if (!isFirstNameValid(firstName)) {
// 		showError(nameInput, 'First name must only contain letters');
// 	} else {
// 		showSuccess(nameInput);
// 		valid = true;
// 	}
// 	return valid;
// };

// const checkEmail = () => {
// 	let valid = false;
// 	const email = emailInput.value.trim();
// 	if (!isRequired(email)) {
// 		showError(emailInput, 'Email field cannot be left blank');
// 	} else if (!isEmailValid(email)) {
// 		showError(emailInput, 'Email is not valid');
// 	} else {
// 		showSuccess(emailInput);
// 		valid = true;
// 	}
// 	return valid;
// };

// const checkTelephone = () => {
// 	let valid = false;
// 	const telephone = telephoneInput.value.trim();
// 	if (!isRequired(telephone)) {
// 		showError(telephoneInput, 'Telephone field cannot be left blank');
// 	} else if (!isTelephoneValid(telephone)) {
// 		showError(telephoneInput, 'Number is not valid');
// 	} else {
// 		showSuccess(telephoneInput);
// 		valid = true;
// 	}
// 	return valid;
// };

// const isNameValid = (nameInput) => {
// 	const re = /^[a-zA-Z]+$/;
// 	return re.test(nameInput);
// };

// const isEmailValid = (emailInput) => {
// 	const re =
// 		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return re.test(emailInput);
// };

// const isTelephoneValid = (telephoneInput) => {
// 	const re = /^[0-9]+$/;
// 	return re.test(telephoneInput);
// };

// const isRequired = (value) => (value === '' ? false : true);

// const showError = (input, message) => {
// 	const formField = input.parentElement;
// 	formField.classList.remove('success');
// 	formField.classList.add('error');

// 	const error = formField.querySelector('small');
// 	error.textContent = message;
// };

// const showSuccess = (input) => {
// 	const formField = input.parentElement;

// 	formField.classList.remove('error');
// 	formField.classList.add('success');

// 	const error = formField.querySelector('small');
// 	error.textContent = '';
// };

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('form submitted');

	let formData = {
		name: nameInput.value,
		email: emailInput.value,
		telephone: telephoneInput.value,
		service: serviceChoice.value,
		message: messageInput.value,
		consent: consentGiven.value,
	};
	console.log(formData);

	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/');
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.onload = function () {
		console.log(xhr.responseText);
		if (xhr.responseText == 'success') {
			alert('email sent');
			nameInput.value = '';
			emailInput.value = '';
			telephoneInput.value = '';
			serviceChoice.value = '';
			messageInput.value = '';
			consentGiven.value = '';
		} else {
			alert('something went wrong');
		}
	};

	xhr.send(JSON.stringify(formData));
});
