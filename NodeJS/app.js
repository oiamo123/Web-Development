const express = require("express");
const app = express();
const path = require("path");

app.set("views", "public");
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));

app.get(["/", "/overview"], (req, res) => {
  res.status(200).render("overview", {
    greetings: ["Hello", "Bonjour", "Hola", "Hallo"],
  });
});

app.get("/contact", (req, res) => {
  res.status(200).render(__dirname + "/public/contact.pug");
});

app.get("/register", (req, res) => {
  res.status(200).render(__dirname + "/public/register.pug");
});

app.get("/create-post", (req, res) => {
  res.status(200).render(__dirname + "/public/create-post.pug");
});

app.post("/create-post", (req, res) => {
  console.log(req.body);
  res.status(200).render(__dirname + "/public/create-post.pug");
});

// app.get("*", (req, res) => {
//   res.status(200).render(__dirname + "/public/404.pug");
// });

app.use(checkNotFound);
function checkNotFound(req, res, next) {
  res.status(404).send(`Page not found`);
}

app.listen(8000, (req, res) => {
  console.log(`The server is listening`);
});
