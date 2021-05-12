// input fields element
const name = document.querySelector('#customerName');
const phone = document.querySelector('#customerPhone');
const email = document.querySelector('#customerEmail');
const carType = document.querySelector('#carType');
const carRegisDate = document.querySelector('#carRegisDate');
// form element
const form = document.querySelector('form');
// error span elements
const emailError = document.querySelector('#emailError');
const nameError = document.querySelector('#nameError');
const phoneError = document.querySelector('#phoneError');
const carTypeError = document.querySelector('#carTypeError');
const carRegisDateError = document.querySelector('#carRegisDateError');

// form submit event listener
form.addEventListener('submit', (e) => {

    if (!isNameValid()) {
        e.preventDefault();
    }
    if (!isEmailValid()) {
        e.preventDefault();
    }
    if (!isPhoneValid()) {
        e.preventDefault();
    }
    if (!isCarTypeValid()) {
        e.preventDefault();
    }
    if (!isCarRegisDateValid()) {
        e.preventDefault();
    }

    e.preventDefault();

})

// add input-error class to element
function errorInput(element) {
    element.classList.add('input-error')
}
// add input-success class to element
function successInput(element) {
    element.classList.add('input-success')
}
// sterialize input elements class
function normalInput(element) {
    element.classList.remove('input-error', 'input-success');
}

// input validation functions
function isNameValid() {
    nameError.textContent = '';
    normalInput(name);
    if (name.value == '') {
        nameError.textContent = "You need to enter a name";
        errorInput(name);
        return false;
    } else if (/[^a-zA-Z ]/.test(name.value)) {
        nameError.textContent = "The entered name should be alphabet";
        errorInput(name);
        return false;
    }
    successInput(name);
    return true;
}

function isPhoneValid() {
    phoneError.textContent = '';
    normalInput(phone);

    if (phone.value == '') {
        phoneError.textContent = "You need to enter a phone number";
        errorInput(phone);
        return false;
    } else if (!(/^\d{12}$/.test(phone.value))) {
        phoneError.textContent = "The entered phone number should be 12 digits";
        errorInput(phone);
        return false;
    }
    successInput(phone);
    return true;
}

function isEmailValid() {
    emailError.textContent = '';
    normalInput(email);

    if (!email.validity.valid) {
        emailError.textContent = "The entered email is invalid";
        errorInput(email);

        return false;
    } else if (email.value == '') {
        emailError.textContent = "You need to enter an e-mail address.";
        errorInput(email);

        return false;
    }
    successInput(email);

    return true;
}

function isCarTypeValid() {
    carTypeError.textContent = '';
    normalInput(carType);

    if (carType.value == '') {
        carTypeError.textContent = "You need to enter a car type";
        errorInput(carType);

        return false;
    } else if (/[^a-zA-Z ]/.test(carType.value)) {
        carTypeError.textContent = "The entered car type should be alphabet";
        errorInput(carType);

        return false;
    }
    successInput(carType);
    return true;
}

function isCarRegisDateValid() {

    carRegisDateError.textContent = '';
    normalInput(carRegisDate);

    if (carRegisDate.value == '') {
        carRegisDateError.textContent = "You need to enter a registration date of the car";
        errorInput(carRegisDate);

        return false;
    }
    successInput(carRegisDate);

    return true;
}