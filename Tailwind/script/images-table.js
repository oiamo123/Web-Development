// FOR IMAGES TABLES W/ DESCRIPTION PAGES
// GAVIN OIAMO, 2024-05-22, COURSE MODULE 5,7, ASSIGNMENT 5,7

// VARIABLES
const table = document.querySelector("table");
let interval = 3;
// ARRAY OF IMAGES AND DESCRIPTIONS
const imgsAndDescs = [
  [
    `nav--carousol--1`,
    `nav--carousol--2`,
    `nav--carousol--3`,
    `nav--carousol--4`,
  ],
  [
    `desert with man`,
    `boat on lake in mountains`,
    `woman standing on rocks`,
    `people taking pictures of hot-air-ballons`,
  ],
  [
    `https://www.discoveregypt.co.uk/`,
    `https://banfftours.com/summer/?comet_source=google&comet_network=g&comet_campaign=21144048418&comet_ad_group=163972136121&comet_ad_id=695089630226&comet_keyword=discover%20banff%20tours&utm_source=paidsearch&gad_source=1&gclid=CjwKCAjwr7ayBhAPEiwA6EIGxCvvPGzYLVCSSPtMPtLwp_nkTfeUbJlNRWyuOuOTeSlQd9eDJvMpShoCNLcQAvD_BwE`,
    `https://www.discovercanadatours.com/tours/summer-rockies-classic/`,
    `https://www.discovereuropeltd.com/`,
  ],
];

// LOOP THROUGH ARRAY OF IMAGES AND DESCRIPTIONS AND INSERT INTO TABLE
for (let i = 0; i < imgsAndDescs[0].length; i++) {
  table.insertAdjacentHTML(
    `beforeend`,
    `
        <tbody style="height: 10rem; width: 10rem; margin: 0; padding: 0;">
        <tr>
            <td class="description">${imgsAndDescs[1][i]}</td>
            <td class="hidden image"><img src="../src/Images/${imgsAndDescs[0][i]}.jpg" alt=""></td>
        </tr>
        </tbody>
  
  
  `
  );
}

// HIDE AND SHOWS IMAGES
document.querySelectorAll(`.description`).forEach((desc) => {
  desc.addEventListener(`mouseenter`, function (e) {
    e.target.nextElementSibling.classList.remove(`hidden`);
  });
  desc.parentElement.addEventListener(`mouseleave`, function (e) {
    desc.nextElementSibling.classList.add(`hidden`);
  });
});

document.querySelectorAll(`.image`).forEach((img, i) => {
  img.addEventListener(`click`, function (e) {
    // OPEN NEW WINDOW
    const newWindow = window.open(`about:`, "_blank");
    newWindow.document.write(
      `You will be redirected in ${interval} seconds...`
    );
    // CLOSE WINDOW AFTER 3 SECONDS
    const newWindowInterval = setInterval(() => {
      interval -= 1;
      newWindow.document.body.innerHTML = "";
      newWindow.document.write(
        `You will be redirected in ${interval} seconds...`
      );
      // REDIRECT AFTER 3 SECONDS
      if (interval === 0) {
        newWindow.close();
        const imgWindow = window.open(`${imgsAndDescs[2][i]}`, "_blank");
        interval = 3;
        clearInterval(newWindowInterval);
      }
    }, "1000");
  });
});
