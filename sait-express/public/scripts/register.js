import { submit, inputMouseOver } from "./modules/Form-Validation.js";

const inputs = document.querySelectorAll(`input`);
const [...inputs1] = inputs;
const submitButton = document.querySelector(`.submit--button`);
const form = document.querySelector(`form`);
const nextButtons = document.querySelectorAll(`.next--button`);
const prevButtons = document.querySelectorAll(`.prev--button`);
const fieldsets = document.querySelectorAll(`fieldset`);

let fieldsetIndex = 0;

// console.log(nextButton);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
});

inputMouseOver(inputs1);

// submitButton.addEventListener(`click`, (e) => {
//   e.preventDefault();
//   submit(e, inputs1);
// });
fieldsets.forEach((fieldset, i) => {
  fieldset.style.transform = `translateX(${i * 300}%)`;
});

// NEXT BUTTON
nextButtons.forEach((button) => {
  button.addEventListener(`click`, (e) => {
    console.log(e);
    const curInputs = button.closest(`fieldset`).querySelectorAll(`input`);
    const [...curInputs1] = curInputs;
    if (submit(e, curInputs1)) {
      fieldsetIndex++;
      fieldsets.forEach((fieldset, i) => {
        fieldset.style.transform = `translateX(${300 * (i - fieldsetIndex)}%`;
      });
    }
  });
});

// PREVIOUS BUTTON
prevButtons.forEach((button) => {
  button.addEventListener(`click`, (e) => {
    fieldsetIndex--;
    fieldsets.forEach((fieldset, i) => {
      fieldset.style.transform = `translateX(${300 * (i - fieldsetIndex)}%`;
    });
  });
});

// SUBMIT FORM ON SUBMIT BUTTON
submitButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (submit(e, inputs1)) {
    form.submit();
  }
});

// PREVENT ENTER KEY SUBMISSION
window.addEventListener(`keydown`, (e) => {
  if (e.key === `Enter`) {
    e.preventDefault();
  }
});

const renderAgents = function (agents) {
  document.querySelector(`.next--button`).insertAdjacentHTML(
    `beforebegin`,
    `<label for="agents">Agent Name:</label>
  <select id="agent" name="agent"></select>`
  );
  agents.forEach((agent) => {
    document
      .querySelector(`#agent`)
      .insertAdjacentHTML(
        `beforeend`,
        `<option value="${agent.AgentId}">${agent.AgtFirstName}, ${agent.AgtLastName[0]}</option>`
      );
  });
};

const data = fetch("/api/agents", { method: "GET" })
  .then((response) => response.json())
  .then((agents) => renderAgents(agents));
