const userModel = require("../models/userModel");

function renderLoginPage(req, res) {
  if (req.session.user) return res.redirect("/dashboard");
  res.render("login", { error: null });
}

function processLogin(req, res) {
  const { username, password } = req.body;
  const user = userModel.findUser(username, password);
  if (user) {
    req.session.user = user.username;
    console.log("Session at login:", req.session);
    res.redirect("/dashboard");
  } else {
    res.render("login", { error: "Invalid credentials" });
  }
}

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect("/login");
  });
}

function renderDashboard(req, res) {
  if (!req.session.user) return res.redirect("/login");
  res.render("dashboard", { username: req.session.user });
}

module.exports = { renderLoginPage, processLogin, logout, renderDashboard };