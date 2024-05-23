// DOCUMENTATION
// FOR CONTACT PAGE
// GAVIN OIAMO, 2024-05-22, COURSE MODULE 4, ASSIGNMENT 4

// IMPORTS
// IMPORTS FOR MODAL
import { toggleModal } from "./modules/modalToggle.js";

// IMPORTS FOR FORM VALIDATION
import { submit, inputMouseOver } from "./modules/Form-Validation.js";

// QUERY SELECTORS
const modalBackground = document.querySelector(`.modal--background`);
const modal = document.querySelector(`.modal`);
const inputs = document.querySelectorAll(
  `#f-name, #l-name, #email, #description`
);
const modalYes = document.querySelector(`.modal--yes`);
const modalNo = document.querySelector(`.modal--no`);
const submitButton = document.querySelector(`.submit-contact`);
const [...inputs1] = inputs;
const form = document.querySelector(`form`);

// PREVENT FORM SUBMISSION BECAUSE IT WILL BE TRIGGERED BY SUBMIT BUTTON IF ALL INPUTS ARE VALID
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
});

// EVENT LISTENER FOR MODAL YES BUTTON
modalYes.addEventListener(`click`, (e) => {
  // window.location.href = "index.html";
  toggleModal();
});

// EVENT LISTENER FOR MODAL NO BUTTON
modalNo.addEventListener(`click`, () => {
  toggleModal();
});

// EVENT LISTENER FOR EACH INPUT. ADDS MOUSEOVER AND MOUSEOUT EVENTS THAT MAKES 'MESSAGE' APPEAR AND DISAPPEAR
inputMouseOver(inputs1);

// EVENT LISTENER ON SUBMIT BUTTON. IF INPUTS ARE EMPTY -> 'THIS FIELD IS REQUIRED', ELSE -> 'PLEASE ENTER VALID FORMAT'
submitButton.addEventListener(`click`, (e) => submit(e, inputs1));
