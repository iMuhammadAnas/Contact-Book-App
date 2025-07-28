const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "../data/users.json");

function getUsers() {
  return JSON.parse(fs.readFileSync(usersPath, "utf8"));
}

function findUser(username, password) {
  const users = getUsers();
  return users.find(u => u.username === username && u.password === password);
}

module.exports = { getUsers, findUser };