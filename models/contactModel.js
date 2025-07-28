const fs = require("fs");
const path = require("path");
const contactsPath = path.join(__dirname, "../data/contacts.json");

function readContactsFile() {
  try {
    if (!fs.existsSync(contactsPath)) {
      fs.writeFileSync(contactsPath, JSON.stringify({}));
    }
    const data = fs.readFileSync(contactsPath, "utf8");
    return data ? JSON.parse(data) : {};
  } catch (err) {
    console.error("Failed to read contacts file:", err);
    return {};
  }
}

function writeContactsFile(data) {
  try {
    fs.writeFileSync(contactsPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Failed to write contacts file:", err);
  }
}

function getContacts(username) {
  const contacts = readContactsFile();
  return contacts[username] || [];
}

function addContact(username, contact) {
  const contacts = readContactsFile();
  if (!contacts[username]) contacts[username] = [];
  contacts[username].push(contact);
  writeContactsFile(contacts);
}

function deleteContact(username, contactIndex) {
  const contacts = readContactsFile();
  if (contacts[username]) {
    contacts[username].splice(contactIndex, 1);
    writeContactsFile(contacts);
  }
}

module.exports = { getContacts, addContact, deleteContact };
