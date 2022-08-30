const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telephoneInput = document.querySelector("#telephone");
const serviceChoice = document.querySelector("#service-list");
const messageInput = document.querySelector("#your-message");

const form = document.querySelector("#contact-us-form");

const checkName = () => {
	let valid = false;

	const firstName = nameInput.value.trim();

	if (!isRequired(firstName)) {
		showError(nameInput, "First name cannot be left blank");
	} else if (!isFirstNameValid(firstName)) {
		showError(nameInput, "First name must only contain letters");
	} else {
		showSuccess(nameInput);
		valid = true;
	}
	return valid;
};

const checkEmail = () => {
	let valid = false;
	const email = emailInput.value.trim();
	if (!isRequired(email)) {
		showError(emailInput, "Email field cannot be left blank");
	} else if (!isEmailValid(email)) {
		showError(emailInput, "Email is not valid");
	} else {
		showSuccess(emailInput);
		valid = true;
	}
	return valid;
};

const checkTelephone = () => {
	let valid = false;
	const telephone = telephoneInput.value.trim();
	if (!isRequired(telephone)) {
		showError(telephoneInput, "Telephone field cannot be left blank");
	} else if (!isTelephoneValid(telephone)) {
		showError(telephoneInput, "Number is not valid");
	} else {
		showSuccess(telephoneInput);
		valid = true;
	}
	return valid;
};

const isNameValid = (nameInput) => {
	const re = /^[a-zA-Z]+$/;
	return re.test(nameInput);
};

const isEmailValid = (emailInput) => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(emailInput);
};

const isTelephoneValid = (telephoneInput) => {
	const re = /^[0-9]+$/;
	return re.test(telephoneInput);
};

const isRequired = (value) => (value === "" ? false : true);

// real time validation
function debounce(fn, delay = 500) {
	let timeoutId;

	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			fn.apply(null, args);
		}, delay);
	};
}

//event delegation
form.addEventListener(
	"input",
	debounce(function (e) {
		switch (e.target.id) {
			case "firstName":
				checkFirstName();
				break;
			case "lastName":
				checkLastName();
				break;
			case "email":
				checkEmail();
				break;
			case "telephone":
				checkTelephone();
				break;
		}
	})
);
