// const express = require("express");
// const router = require("router");

// router.get("/", (req, res) => {
//   res.send("Wiki home page");
// });

// router.get("/about", (req, res) => {
//   res.send("Wiki about page");
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
