import { toggleModal, checkInput, clearInput } from "./modules/modalToggle.js";

const modalBackground = document.querySelector(`.modal--background`);
const modal = document.querySelector(`.modal`);
const inputs = document.querySelectorAll(
  `#f-name, #l-name, #sign-up-email, #description`
);
const modalYes = document.querySelector(`.modal--yes`);
const modalNo = document.querySelector(`.modal--no`);

const [...inputs1] = inputs;

document.querySelector(`.submit-contact`).addEventListener(`click`, (e) => {
  e.preventDefault();
  if (inputs1.every(checkInput)) {
    toggleModal();
  } else {
    inputs1.forEach((input) => {
      if (input.value === "") {
        input.setCustomValidity(`Fields cannot be empty`);
        input.reportValidity();
      }
    });
  }
});

modalYes.addEventListener(`click`, (e) => {
  window.location.href = "index.html";
});

modalNo.addEventListener(`click`, () => {
  toggleModal();
});
