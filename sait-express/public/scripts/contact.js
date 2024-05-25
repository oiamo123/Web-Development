import { submit, inputMouseOver } from "./modules/Form-Validation.js";

const submitButton = document.querySelector(`.submit--button`);
const form = document.querySelector(`form`);
const inputs = document.querySelectorAll(`input, textarea`);
const [...inputs1] = inputs;

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
});

inputMouseOver(inputs1);

submitButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  submit(e, inputs1);
});
