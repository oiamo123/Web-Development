// IMPORTS
// IMPORTS FOR MODAL
import { toggleModal, checkInput, clearInput } from "./modules/modalToggle.js";

// IMPORTS FOR FORM VALIDATION
import {
  checkInputsForEmpty,
  checkInputsForPattern,
  toggleInputMessage,
  removeMessage,
} from "./modules/Form-Validation.js";
import { regexObj, inputMessages } from "./modules/Form-Validation.js";
import { telRegex, nameRegex, emailRegex } from "./modules/Form-Validation.js";

// VARIABLES
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
let inputsAreValid = [];
console.log(inputs1);

// PREVENT FORM SUBMISSION BECAUSE IT WILL BE TRIGGERED BY SUBMIT BUTTON IF ALL INPUTS ARE VALID
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
});

const setMarginBottom = function (input, value) {
  input.style.marginBottom = value;
};

modalYes.addEventListener(`click`, (e) => {
  window.location.href = "index.html";
});

modalNo.addEventListener(`click`, () => {
  toggleModal();
});

// EVENT LISTENER FOR EACH INPUT. ADDS MOUSEOVER AND MOUSEOUT EVENTS THAT MAKES 'MESSAGE' APPEAR AND DISAPPEAR
inputs1.forEach((input) => {
  input.addEventListener("mouseover", () => {
    setMarginBottom(input, `0px`);
    toggleInputMessage(input, `This field is required`);
  });
  input.addEventListener(`mouseout`, () => {
    setMarginBottom(input, `1.5rem`);
    removeMessage(input);
  });
});

// EVENT LISTENER ON SUBMIT BUTTON. IF INPUTS ARE EMPTY -> 'THIS FIELD IS REQUIRED', ELSE -> 'PLEASE ENTER VALID FORMAT'
submitButton.addEventListener(`click`, function (e) {
  e.preventDefault();
  // SETS MARGIN-BOTTOM TO PRERVENT OFFSET OF INPUTS AND MESSAGES
  inputs1.forEach((input) => setMarginBottom(input, `0px`));

  // CHECKS FOR EMPTY INPUTS, SHOWS 'THIS FIELD IS REQUIRED' ON EMPTY INPUTS
  checkInputsForEmpty(inputs1);

  // CHECKS FOR VALID INPUTS, SHOWS 'PLEASE ENTER VALID FORMAT' ON INVALID INPUTS
  let myArr = checkInputsForPattern(inputs1);
  console.log(myArr);
  if (myArr.every((x) => x === true)) {
    console.log(`form submitted`);
    toggleModal();
  }
  myArr = [];
  inputsAreValid = [];
});
