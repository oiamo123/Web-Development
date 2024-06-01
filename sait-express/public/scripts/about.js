// RENDERS REGIONS ON WEBPAGE
const renderRegions = function (regions) {
  console.log(regions);
  const regionsFiltered = regions.filter(
    (region) => region.RegionName !== "Other                    "
  );
  console.log(regionsFiltered);
  const slider = document.querySelector(`.slide-track`);
  regionsFiltered.forEach((region) => {
    slider.insertAdjacentHTML(
      `afterbegin`,
      `
        <h1>${region.RegionName}</h1>
    `
    );
  });
};

// FETCHES REGIONS FROM API AND INSERTS IT ON WEBPAGE
fetch("/api/about", { method: "GET" })
  .then((res) => res.json())
  .then((data) => renderRegions(data));
