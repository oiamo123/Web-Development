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
  if (submit(e, inputs1)) {
    form.submit();
  }
});

const renderContactInfo = function (agencies) {
  const article = document.querySelector(`article`);
  agencies.forEach((agency) => {
    article.insertAdjacentHTML(
      `afterbegin`,
      `
      <section>
        <h1>${agency.AgncyCity}, ${agency.AgncyProv}</h1>
        <p>${agency.AgncyAddress}</p>
        <p>Phone: ${agency.AgncyPhone}</p>
        <p>Fax: ${agency.AgncyFax}</p>
      </section>
    `
    );
  });
};

const data = fetch(`/api/contact`, { method: `GET` })
  .then((res) => res.json())
  .then((data) => renderContactInfo(data));
