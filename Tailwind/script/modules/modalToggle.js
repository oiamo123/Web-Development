const toggleModal = function () {
  document.querySelector(`.modal`).classList.toggle(`hidden`);
  document.querySelector(`.modal--background`).classList.toggle(`hidden`);
};
const checkInput = (input) => input.value !== "";
const clearInput = function (inputs) {
  if (inputs === undefined) {
    return;
  } else {
    inputs.forEach((input) => (input.value = ""));
  }
};

export { toggleModal, checkInput, clearInput };
