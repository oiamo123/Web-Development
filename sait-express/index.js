// USED TO SEND OUT FILES

const express = require("express");
const greeting = require("./public/scripts/modules/greeting");
const app = express();
const path = require("path");
const pug = require("pug");
const mySql = require("mysql");
const api = require("./api.js");
let curPage = "";

// sets up pug
app.set("views", "views");
app.set("view engine", "pug");

// sets up static file routes
app.use(express.static("public/stylesheets"));
app.use(express.static("public/scripts"));
app.use(express.static("views/images"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", api);

// Creates server
const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "travelexperts",
});

// connect to server
connection.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to mySql Database!`);
});

// app.gets sends html, script and styling
app.get(["/", "/overview"], (req, res) => {
  const date = new Date().toDateString();
  curPage = greeting();
  res.status(200).render(`main-pages/${curPage}`, {
    title: curPage,
    greeting: `Good ${curPage}`,
    time: date,
  });
});

app.get("/about", (req, res) => {
  res.status(200).render("about");
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

// sends 404 if page not found
app.use((req, res, next) => {
  res.status(404).send(`<h1>404 not found</h1>`);
});

app.listen(8000, () => {
  console.log(`The server is listening...`);
});
