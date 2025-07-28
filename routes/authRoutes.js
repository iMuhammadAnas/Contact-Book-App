const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/", (req, res) => {res.redirect("/login")})
router.get("/login", authController.renderLoginPage);
router.post("/login", authController.processLogin);
router.get("/logout", authController.logout);
router.get("/dashboard", authController.renderDashboard);

module.exports = router;