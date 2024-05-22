// FOR MODALS

// EXPORTS
export { toggleModal, checkInput, clearInput };

// TOGGLE MODAL AND MODAL BACKGROUND
const toggleModal = function (modal, modalBackground) {
  document.querySelector(`.modal`).classList.toggle(`hidden`);
  document.querySelector(`.modal--background`).classList.toggle(`hidden`);
};

// CHECK IF INPUT IS EMPTY
const checkInput = (input) => input.value !== "";

// CLEAR INPUTS
const clearInput = function (inputs) {
  if (inputs === undefined) {
    return;
  } else {
    inputs.forEach((input) => (input.value = ""));
  }
};
