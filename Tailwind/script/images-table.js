// FOR IMAGES TABLES W/ DESCRIPTION PAGES
// GAVIN OIAMO, 2024-05-22, COURSE MODULE, ASSIGNMENT

// VARIABLES
const table = document.querySelector("table");
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
];

// LOOP THROUGH ARRAY OF IMAGES AND DESCRIPTIONS AND INSERT INTO TABLE
for (let i = 0; i < imgsAndDescs[0].length; i++) {
  table.insertAdjacentHTML(
    `beforeend`,
    `
    <tr>
        <td class="h-60"><img src="../src/Images/${imgsAndDescs[0][i]}.jpg" alt=""></td>
        <td>${imgsAndDescs[1][i]}</td>
    </tr>


    `
  );
}
