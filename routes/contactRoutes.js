const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.get("/", contactController.renderContacts);
router.post("/add", contactController.addContact);
router.get("/delete/:index", contactController.deleteContact);

module.exports = router;