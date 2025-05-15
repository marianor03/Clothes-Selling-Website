const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

// ✅ Correct static middleware
app.use(express.static(path.join(__dirname, "../static")));

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/shop", (req, res) => {
  res.render("shop", { title: "Shop" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

module.exports = app;
