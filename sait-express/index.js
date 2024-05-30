const express = require("express");
const greeting = require("./public/scripts/modules/greeting");
const app = express();
const path = require("path");
const pug = require("pug");
const mySql = require("mysql");
let curPage = "";

app.set("views", "views");
// app.set("views", "views/main-pages");
app.set("view engine", "pug");

// app.use(express.static("views"));
app.use(express.static("public/stylesheets"));
app.use(express.static("public/scripts"));
app.use(express.static("views/images"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "travelexperts",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to mySql Database!`);
});

app.get(["/", "/overview"], (req, res) => {
  const date = new Date().toDateString();
  curPage = greeting();
  res.status(200).render(`main-pages/${curPage}`, {
    title: curPage,
    greeting: `Good ${curPage}`,
    time: date,
  });
});

app.get("/packages", (req, res) => {
  connection.query("SELECT * FROM packages", (err, results) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact");
});

app.get("/register", (req, res) => {
  res.status(200).render("register");
});

app.get("/confirm", (req, res) => {
  res.status(200).render("confirm");
});

app.get("/create-post", (req, res) => {
  res.status(200).render("create-post");
  console.log(req.body);
});

// app.get("/contactform", (req, res) => {
//   console.log(req);
// });

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("confirm");
});

app.post("/register", (req, res) => {
  console.log(`test`);
  console.log(req.body);
  res.redirect("confirm");
});

app.use((req, res, next) => {
  res.status(404).send(`<h1>404 not found</h1>`);
  //   next()
});

// app.use(functionName)

app.listen(8000, () => {
  console.log(`The server is listening...`);
});
