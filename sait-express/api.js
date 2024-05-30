const express = require("express");
const router = express.Router();
const mySql = require("mysql");
// const connection = require("");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "travelexperts",
});

router.get("/packages", (req, res) => {
  console.log(req);
  connection.query("SELECT * FROM packages", (err, results) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
