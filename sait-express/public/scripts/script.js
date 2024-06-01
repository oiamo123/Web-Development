// INSERTS PACKAGES ONTO WEBPAGE

const insertPackages = function (packages) {
  document
    .querySelector(`.article--1`)
    .insertAdjacentHTML(
      "beforeend",
      `<section class="card--box--1"></section>`
    );
  packages.forEach((package) => {
    const startDate = new Date(package.PkgStartDate).toDateString();
    const endDate = new Date(package.PkgEndDate).toDateString();
    document.querySelector(`.card--box--1`).insertAdjacentHTML(
      "afterbegin",
      `
      <div class="card--1">
         <h1>${package.PkgName}</h1>
         <p>${package.PkgDesc}</p>
         <p>${startDate}</p>
         <p>${endDate}</p>
         <p>$${package.PkgBasePrice}</p>
      </div>
    `
    );
  });
};

// FETCHES DATA FROM API AND INSERTS IT ONTO WEBPAGE
const data = fetch(`/api/overview`, { method: "GET" })
  .then((res) => res.json())
  .then((packages) => insertPackages(packages))
  .catch((err) => {
    if (err) throw err;
  });
