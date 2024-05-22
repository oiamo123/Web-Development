export {
  checkInputsForEmpty,
  checkInputsForPattern,
  toggleInputMessage,
  removeMessage,
};
export { regexObj, inputMessages };
export { telRegex, nameRegex, emailRegex };

// QUERYSELECTORS

const inputs = document.querySelectorAll(`input`);
const [...inputs1] = inputs;
const submitButton = document.querySelector(`.submit--button`);
const resetButton = document.querySelector(`.reset--button`);
const form = document.querySelector(`form`);

// REGEXES
const telRegex = /\d{3}[-. ]?\d{3}[-. ]?\d{4}$/;
const nameRegex = /[A-Za-z]+$/;
const emailRegex =
  /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
const descriptionRegex = /./;

// INPUT MESSAGES
const inputMessages = {
  ["f-name"]: `Please enter a valid first name in the format of 'John' or 'Johnson`,
  ["l-name"]: `Please enter a valid last name in the format of 'John' or 'Johnson`,
  ["tel"]: `Please enter a valid phone number in the format 555-555-5555 with or without a '-', '.' or space`,
  ["email"]: `Please enter a valid email address in the format John@example.com`,
  ["description"]: "Cannot be left empty",
};

const regexObj = {
  ["f-name"]: nameRegex,
  ["l-name"]: nameRegex,
  ["tel"]: telRegex,
  ["email"]: emailRegex,
  ["description"]: descriptionRegex,
};

// PREVENT FORM SUBMISSION BECAUSE IT WILL BE TRIGGERED BY THE SUBMIT BUTTON
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
});

// VARIABLES
let inputsAreValid = [];

// TOGGLES INPUT MESSAGES UNDER INPUT IE 'THIS FIELD IS REQUIRED'
const toggleInputMessage = function (input, message) {
  input.nextElementSibling.classList.remove(`hidden`);
  input.nextElementSibling.textContent = message;
};

// CHECKS IF THE INPUTS ARE EMPTY, IF TRUE ENTERS 'THIS FIELD IS REQUIRED
const checkInputsForEmpty = function (inputs) {
  inputs.forEach((input) => {
    if (input.value === "") {
      toggleInputMessage(input, `This field is required`);
    } else {
      removeMessage(input);
    }
  });
};

// REMOVES THE INPUT MESSAGE
const removeMessage = function (input) {
  input.nextElementSibling.classList.add(`hidden`);
};

const toggleInputPatternMismatch = function (input, regexValue, message) {
  const regexResults = regexValue.test(input.value);
  // CHECKS IF THE INPUT VALUE MATCHES THE REGEX
  // IF ITS DOES, REMOVES THE MESSAGE AND RETURNS TRUE + VICE VERSA
  if (regexResults === true) {
    removeMessage(input);
    return true;
  } else {
    toggleInputMessage(input, `${message}`);
    return false;
  }
};

// CHECKS THE INPUTS FOR CORRECT PATTERNS IE INPUT.VALUE === REGEX
// AND CHECKS TO SEE IF INPUTS ARE EMPTY TO DISPLAY CORRECT MESSAGE
// IE INPUT.VALUE === "" -> 'THIS FIELD IS REQUIRED'
// INPUT.VALUE !== "" -> 'PLEASE ENTER VALID FORMAT
const checkInputsForPattern = function (inputs) {
  inputs.forEach((input) => {
    if (input.value !== "") {
      inputsAreValid.push(
        toggleInputPatternMismatch(
          input,
          regexObj[`${input.id}`],
          inputMessages[`${input.id}`]
        )
      );
    } else {
      inputsAreValid.push(false);
    }
  });
  return inputsAreValid;
};

// ADDS THIS FIELD IS REQUIRED MESSAGE TO EACH INPUT
inputs1.forEach((input) => {
  input.addEventListener("mouseover", () => {
    toggleInputMessage(input, `This field is required`);
  });
  input.addEventListener(`mouseout`, () => {
    removeMessage(input);
  });
});

// submitButton.addEventListener(`click`, function (e) {
//   e.preventDefault();
//   checkInputsForEmpty(inputs1);

//   const myarr = checkInputsForPattern(inputs1);
//   if (myarr.every((x) => x === true)) {
//     console.log(`form submitted`);
//   }

//   inputsAreValid = [];
// });
