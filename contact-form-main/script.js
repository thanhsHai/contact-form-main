"use strict";

const showErrorlabel = function (elementId) {
  const errorLabel = document.querySelector(`label[for="${elementId}"].error`);
  errorLabel.classList.remove("hidden");
};

const hiddenErrorlabel = function (elementId) {
  const errorLabel = document.querySelector(`label[for="${elementId}"].error`);
  errorLabel.classList.add("hidden");
};

const validName = function (nameId) {
  const name = document.getElementById(nameId).value;
  const namePattern = /^[a-zA-Z\s-]+$/;
  return namePattern.test(name);
};

const validEmail = function (emailId) {
  const email = document.getElementById(emailId).value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validMessage = function (messageId) {
  const message = document.getElementById(messageId);
  return message.value !== "" ? true : false;
};

const isRadioChecked = function () {
  const radios = document.querySelectorAll('input[type="radio"]');
  for (const radio of radios) {
    if (radio.checked) {
      return true;
    }
  }
  return false;
};

const isCheckboxChecked = function (checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  return checkbox.checked ? true : false;
};

const hasErrorLabel = function (elementId) {
  const errorLabel = document.querySelector(`label[for="${elementId}"].error`);
  return errorLabel.classList.contains("hidden") ? false : true;
};

const successPop = document.querySelector(".success-pop-container");
const contactForm = document.querySelector(".contact-form-container");

const handleSubmitBtnClick = function () {
  let isValid = true;

  // First name check
  if (validName("first-name")) {
    if (hasErrorLabel("first-name")) {
      hiddenErrorlabel("first-name");
    }
  } else {
    showErrorlabel("first-name");
    isValid = false;
  }

  // Last name check
  if (validName("last-name")) {
    if (hasErrorLabel("last-name")) {
      hiddenErrorlabel("last-name");
    }
  } else {
    showErrorlabel("last-name");
    isValid = false;
  }

  // Email check
  if (validEmail("email")) {
    if (hasErrorLabel("email")) {
      hiddenErrorlabel("email");
    }
  } else {
    showErrorlabel("email");
    isValid = false;
  }

  // Radio check
  if (isRadioChecked()) {
    if (hasErrorLabel("query-type")) {
      hiddenErrorlabel("query-type");
    }
  } else {
    showErrorlabel("query-type");
    isValid = false;
  }

  // Message check
  if (validMessage("message")) {
    if (hasErrorLabel("message")) {
      hiddenErrorlabel("message");
    }
  } else {
    showErrorlabel("message");
    isValid = false;
  }

  // Checkbox check
  if (isCheckboxChecked("consent")) {
    if (hasErrorLabel("consent")) {
      hiddenErrorlabel("consent");
    }
  } else {
    showErrorlabel("consent");
    isValid = false;
  }

  // Show pop-up
  if (isValid) {
    successPop.classList.remove("hidden");
    contactForm.classList.add("hidden");

    setTimeout(() => {
      successPop.classList.add("hidden");
      contactForm.classList.remove("hidden");
    }, 3000);
  }
};

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", handleSubmitBtnClick);

const radios = document.querySelectorAll(".form-checkbox");

for (const radio of radios) {
  radio.addEventListener("click", () => {
    radios.forEach((rad) => rad.classList.remove("bg-green-200"));
    radio.classList.add("bg-green-200");
    const radioInput = radio.querySelector('input[type="radio"]');
    radioInput.checked = true;
  });
}
