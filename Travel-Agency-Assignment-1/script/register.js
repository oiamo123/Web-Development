// FOR SIGN UP PAGE
// GAVIN OIAMO, 2024-05-22, COURSE MODULE 4, ASSIGNMENT 4
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

// CLEARS INPUTS
const clearInput = function (inputs) {
  inputs.forEach((input) => (input.value = ""));
};

// PREVENT FORM SUBMISSION BECAUSE IT WILL BE TRIGGERED BY SUBMIT BUTTON IF ALL INPUTS ARE
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
});

// TOGGLE MODAL WHEN RESET BUTTON IS CLICKED
document.querySelector(`.reset-sign-up`).addEventListener(`click`, (e) => {
  e.stopPropagation();
  toggleModal();
  resetClicked = true;
});

// RESET -> YES -> CLEARS INPUTS OR SUBMIT -> YES -> RETURNS TO INDEX.HTML
modalYes.addEventListener(`click`, (e) => {
  if (resetClicked) {
    toggleModal();
    clearInput(inputs1);
    resetClicked = false;
  } else {
    
  }
});

modalNo.addEventListener(`click`, () => {
  toggleModal();
});

// TOGLES "FIELD IS REQUIRED" MESSAGE ON MOUSEOVER
inputMouseOver(inputs1);

// TRIGGERS SUBMIT FUNCTION IN FORM-VALIDATION.JS ON CLICK
submitButton.addEventListener(`click`, (e) => submit(e, inputs1));
