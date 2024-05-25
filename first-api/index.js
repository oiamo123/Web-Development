const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const data = require("./data/data.json");

app.use(express.static("views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/test.json", (req, res) => {
  res.json(data);
});

app.listen(8000, () => {
  console.log(`Server is listening`);
});
