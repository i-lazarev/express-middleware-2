const express = require("express");
const api = express();

api.listen(3000, () => {
  console.log("server listening");
});
let arrUsers = [
  { username: "Wanja", role: "Admin" },
  { username: "Rob", role: "User" }
];

api.use(express.urlencoded());

const adminCheck = (req, res, next) => {
  let userFind = arrUsers.filter(user => user.role === "Admin");
  if (
    req.query.username && req.query.username.toLowerCase() ===
    userFind[0].username.toLowerCase()
  ) {
    next();
  } else {
    return res.redirect("/");
  }
};

const ageCheck = (req, res, next) => {
  if (req.query.age && req.query.age >= 18) {
    next();
  } else {
    next("You have not the required age");
  }
};

api.use("/secure", ageCheck);
api.use("/admin", adminCheck);

api.get("/", (req, res) => {
  res.send("<h1>Welcome to Home Page</h1><br><a href=/admin>Admin</a>");
  console.log("HomePage");
});

api.get("/secure", (req, res) => {
  res.send("You reached the security area");
});

api.get("/admin", (req, res) => {
  res.send("Welcome to admin page");
});
