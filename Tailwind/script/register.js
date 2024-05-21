import { toggleModal, checkInput, clearInput } from "./modules/modalToggle.js";

class User {
  constructor(firstName, lastName, email, country, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.country = country;
    this.password = password;
  }
}

const password = document.querySelector(`.sign-up-password`);
const confirmPassword = document.querySelector(`.confirm-password`);
const inputs = document.querySelectorAll(
  `#f-name, #l-name, #sign-up-email, #sign-up-password, #confirm-password`
);
const modalYes = document.querySelector(`.modal--yes`);
const modalNo = document.querySelector(`.modal--no`);
const [...inputs1] = inputs;
let resetClicked = false;

document
  .querySelector(`.sign-up-form`)
  .addEventListener(`submit`, function (e) {
    e.preventDefault();
    const firstName = document.querySelector(`.f-name`);
    const lastName = document.querySelector(`.l-name`);
    const email = document.querySelector(`.sign-up-email`);
    const country = document.querySelector(`.country`);

    if (password.value === confirmPassword.value) {
      new User(firstName, lastName, email, country);
      console.log(`user submitted`);
    }
  });

document.querySelectorAll(`.password`).forEach((pass) => {
  pass.addEventListener(`input`, function () {
    console.log(password.value);
    console.log(confirmPassword.value);
    console.log(password.value === confirmPassword.value);
    if (password.value !== confirmPassword.value) {
      password.setCustomValidity(`Passwords do not match`);
    } else {
      password.setCustomValidity("");
    }
  });
});

document.querySelector(`.submit-sign-up`).addEventListener(`click`, (e) => {
  e.preventDefault();
  if (inputs1.every(checkInput) && password.value === confirmPassword.value) {
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
