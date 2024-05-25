const express = require("express");
const app = express();

app.use(express.static("views"));
app.use(express.static("public/stylesheets"));
app.use(express.static("public/scripts"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index");
});

app.get("/overview", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/confirm", (req, res) => {
  res.sendFile(__dirname + "/views/confirm.html");
});

app.get("/create-post", (req, res) => {
  res.sendFile(__dirname + "/views/create-post.html");
});

// app.get("/contactform", (req, res) => {
//   console.log(req);
// });

app.post("/contactform", (req, res) => {
  console.log(req.body);
  res.redirect("/confirm");
});

app.use((req, res, next) => {
  res.status(404).send(`<h1>404 not found</h1>`);
  //   next()
});

// app.use(functionName)

app.listen(8000, () => {
  console.log(`The server is listening...`);
});
