const contactModel = require("../models/contactModel");

function renderContacts(req, res) {
  if (!req.session.user) return res.redirect("/login");
  const contacts = contactModel.getContacts(req.session.user);
  res.render("contacts", { contacts, username: req.session.user });
}

function addContact(req, res) {
  if (!req.session.user) return res.redirect("/login");
  const { name, phone } = req.body;
  contactModel.addContact(req.session.user, { name, phone });
  res.redirect("/contacts");
}

function deleteContact(req, res) {
  if (!req.session.user) return res.redirect("/login");
  const { index } = req.params;
  contactModel.deleteContact(req.session.user, index);
  res.redirect("/contacts");
}

module.exports = { renderContacts, addContact, deleteContact };