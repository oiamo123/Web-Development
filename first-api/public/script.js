console.log(`Hello world`);

const result = async function () {
  const data = await fetch("http://127.0.0.1:8000/test.json")
    .then((res) => res.json())
    .then((data) => data);
  const users = data.users;
  users.forEach((user) => {
    document
      .querySelector(`ul`)
      .insertAdjacentHTML(`beforeend`, `<li>${user["f-name"]}</li>`);
  });
};
result();
