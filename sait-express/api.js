// USED TO SEND OUT AND RECEIVE DATA

const express = require("express");
const router = express.Router();
const mySql = require("mysql");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "travelexperts",
});

// sends packages data to overview page
router.get("/overview", (req, res) => {
  connection.query("SELECT * FROM packages", (err, results) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(results);
      console.log(results);
    }
  });
});

// sends agents data to register page
router.get("/register", (req, res) => {
  connection.query("SELECT * FROM agents", (err, results) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(results);
    }
  });
});

// sends addresses data to contact page
router.get("/contact", (req, res) => {
  connection.query("SELECT * FROM agencies", (err, results) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(results);
    }
  });
});

// listens for contact form and redirects to confirm page
router.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/confirm");
});

// sends locations data to about page
router.get("/about", (req, res) => {
  connection.query("SELECT * FROM regions", (err, results) => {
    res.status(200).json(results);
  });
});

// writes register form data to database
router.post("/register", (req, res) => {
  console.log(req);
  const values = [
    req.body["f-name"],
    req.body["l-name"],
    req.body["address"],
    req.body["city"],
    req.body["province"],
    req.body["country"],
    req.body["postal-code"],
    req.body["tel"],
    req.body["business-tel"],
    (req.body["email"] ||= null),
    req.body["agent"],
  ];
  const sql =
    "INSERT INTO `customers` (`CustomerId`, `CustFirstName`, `CustLastName`, `CustAddress`, `CustCity`, `CustProv`, `CustCountry`, `CustPostal`, `CustHomePhone`, `CustBusPhone`, `CustEmail`, `AgentId`) VALUES (null,?,?,?,?,?,?,?,?,?,?,?)";
  connection.query(sql, values, (err, results) => {
    console.log(sql + values);
    if (err) {
      throw err;
    } else {
      console.log(`data submitted`);
      res.redirect("/confirm");
    }
  });
});

module.exports = router;
