const imgs = document.querySelectorAll(`.carousel > img`);
const navDropdownBtn = document.querySelector(
  `.links ion-icon[name="menu-outline"]`
);
const sidebar = document.querySelector(`.sidebar`);
const carousel = document.querySelector(`.carousel`);
const readyToStart = document.querySelector(`.ready--to--start`);
const learnMoreLinks = document.querySelectorAll(`.learn--more--link`);
const learnMoreButtons = document.querySelectorAll(`.learn--more--button`);
const tripCards = document.querySelectorAll(`.trip--cards`);
const sidebarLinks = document.querySelectorAll(`.sidebar ul li`);
const body = document.querySelector(`body`);
//for nav bar
const blogPost = document.querySelector(`.blog--post`);
const CustomerTestimonials = document.querySelector(`.customer--testimonials`);
const teamMembers = document.querySelector(`.our--team`);
const favTrips = document.querySelector(`.fav--trips`);
const bookTrip = document.querySelector(`.ready--to--start`);
const pages = [bookTrip, favTrips, teamMembers, CustomerTestimonials, blogPost];

//For carousel
let currentImg = 0;

// Toggle Arrows on buttons
const toggleButtonArrow = function (e) {
  e.target.childNodes.forEach((child) => {
    if (child.classList.contains(`button--arrow`))
      child.classList.toggle(`hidden`);
  });
};

const toggleSidebar = function () {
  sidebar.classList.toggle(`hidden`);
};

// To open and close sidebar
navDropdownBtn.addEventListener(`click`, toggleSidebar);
// For desktop
sidebar.addEventListener(`mouseleave`, toggleSidebar);
// For Mobile

//Sets header carousel imgs
imgs.forEach((img, i) => {
  img.style.transform = `translateX(${i * 100}%)`;
});

// carousel timer
setInterval(function () {
  currentImg++;
  if (currentImg === imgs.length) currentImg = 0;
  imgs.forEach((img, i) => {
    img.style.transform = `translateX(${100 * (i - currentImg)}%)`;
  });
}, 6000);

//Toggle arrows on buttons event listeners
learnMoreButtons.forEach((button) => {
  button.addEventListener("mouseenter", toggleButtonArrow);
});

learnMoreButtons.forEach((button) => {
  button.addEventListener(`mouseleave`, toggleButtonArrow);
});

// scroll to
sidebarLinks.forEach((link, i) => {
  link.addEventListener(`click`, function (e) {
    console.log(e.target.getAttribute(`name`));
    console.log(i);
    toggleSidebar();
    window.scrollTo(0, pages[i].offsetTop);
  });
});

// window.addEventListener(`resize`, function () {
//   bookTrip.style.marginTop = `${
//     document.querySelector(`.carousel img`).getBoundingClientRect().height - 471
//   }px`;
// });
