// DOCUMENTATION
// FOR INDEX.HTML (MAIN PAGE)
// GAVIN OIAMO, 2024-05-22, COURSE MODULE, ASSIGNMENT

// QUERY SELECTORS
const body = document.querySelector(`body`);

// CAROUSEL
const imgs = document.querySelectorAll(`.carousel > img`);
const carousel = document.querySelector(`.carousel`);

// SIDEBAR
const navDropdownBtn = document.querySelector(
  `.links ion-icon[name="menu-outline"]`
);
const sidebar = document.querySelector(`.sidebar`);
const sidebarLinks = document.querySelectorAll(`.sidebar ul li`);
// SIDEBAR LINKS
const blogPost = document.querySelector(`.blog--post`);
const CustomerTestimonials = document.querySelector(`.customer--testimonials`);
const teamMembers = document.querySelector(`.our--team`);
const favTrips = document.querySelector(`.fav--trips`);
const bookTrip = document.querySelector(`.ready--to--start`);

// LEARN MORE BUTTONS
const learnMoreButtons = document.querySelectorAll(`.learn--more--button`);

// VARIABLES
const pages = [bookTrip, favTrips, teamMembers, CustomerTestimonials, blogPost];
let currentImg = 0;

// TOGGLE ARROW ON BUTTONS ON HOVER
const toggleButtonArrow = function (e) {
  e.target.childNodes.forEach((child) => {
    if (child.classList.contains(`button--arrow`))
      child.classList.toggle(`hidden`);
  });
};

// TOGGLE SIDEBAR WHEN NAV DROPDOWN BUTTON IS CLICKED
const toggleSidebar = function () {
  sidebar.classList.toggle(`hidden`);
};

navDropdownBtn.addEventListener(`click`, toggleSidebar);
sidebar.addEventListener(`mouseleave`, toggleSidebar);

//SETS HEADER CAROUSEL IMAGES LEFT POSITION -> 0%, 100%, 200%...
imgs.forEach((img, i) => {
  img.style.transform = `translateX(${i * 100}%)`;
});

// CAROUSEL INTERVAL
// INCREMENTS 'CURRENT IMG', TRANSFORMS IMAGES EVERY 6 SECONDS -> CURRENT IMG === 2 -> I(0)
setInterval(function () {
  currentImg++;
  if (currentImg === imgs.length) currentImg = 0;
  imgs.forEach((img, i) => {
    img.style.transform = `translateX(${100 * (i - currentImg)}%)`;
  });
}, 6000);

learnMoreButtons.forEach((button) => {
  button.addEventListener("mouseenter", toggleButtonArrow);
});

learnMoreButtons.forEach((button) => {
  button.addEventListener(`mouseleave`, toggleButtonArrow);
});

// SCROLL TO SECTION WHEN SIDEBAR LINK IS CLICKED
sidebarLinks.forEach((link, i) => {
  link.addEventListener(`click`, function (e) {
    console.log(e.target.getAttribute(`name`));
    console.log(i);
    toggleSidebar();
    window.scrollTo(0, pages[i].offsetTop);
  });
});
