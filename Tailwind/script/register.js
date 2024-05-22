// FOR SIGN UP PAGE
// GAVIN OIAMO, 2024-05-22, COURSE MODULE, ASSIGNMENT
// IMPORTS

import { submit, inputMouseOver } from "./modules/Form-Validation.js";
import { toggleModal } from "./modules/modalToggle.js";

// USER OBJECT
class User {
  constructor(firstName, lastName, email, country, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.country = country;
    this.password = password;
  }
}

// QUERY SELECTORS
const submitButton = document.querySelector(`.submit-sign-up`);
const password = document.querySelector(`.sign-up-password`);
const confirmPassword = document.querySelector(`.confirm-password`);
const inputs = document.querySelectorAll(
  `#f-name, #l-name, #email, #password, #confirm-password`
);
const modalYes = document.querySelector(`.modal--yes`);
const modalNo = document.querySelector(`.modal--no`);
const form = document.querySelector(`form`);

// VARIABLES
let resetClicked = false;
const [...inputs1] = inputs;
// document
//   .querySelector(`.sign-up-form`)
//   .addEventListener(`submit`, function (e) {
//     e.preventDefault();
//     const firstName = document.querySelector(`.f-name`);
//     const lastName = document.querySelector(`.l-name`);
//     const email = document.querySelector(`.sign-up-email`);
//     const country = document.querySelector(`.country`);

//     if (password.value === confirmPassword.value) {
//       new User(firstName, lastName, email, country);
//       console.log(`user submitted`);
//     }
//   });

// document.querySelectorAll(`.password`).forEach((pass) => {
//   pass.addEventListener(`input`, function () {
//     console.log(password.value);
//     console.log(confirmPassword.value);
//     console.log(password.value === confirmPassword.value);
//     if (password.value !== confirmPassword.value) {
//       password.setCustomValidity(`Passwords do not match`);
//     } else {
//       password.setCustomValidity("");
//     }
//   });
// });
const clearInput = function (inputs) {
  inputs.forEach((input) => (input.value = ""));
};

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
});

document.querySelector(`.reset-sign-up`).addEventListener(`click`, (e) => {
  e.stopPropagation();
  toggleModal();
  resetClicked = true;
});

modalYes.addEventListener(`click`, (e) => {
  if (resetClicked) {
    toggleModal();
    clearInput(inputs1);
    resetClicked = false;
  } else {
    window.location.href = "index.html";
  }
});

modalNo.addEventListener(`click`, () => {
  toggleModal();
});

inputMouseOver(inputs1);

submitButton.addEventListener(`click`, (e) => submit(e, inputs1));
