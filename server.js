const express = require("express");
const session = require("express-session");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = 3000;

const SESSION_SECRET = process.env.SESSION_SECRET || "defaultsecret";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
const MemoryStore = require("memorystore")(session);

app.use(session({
  store: new MemoryStore({ checkPeriod: 86400000 }), // 24 hours
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    secure: false,
    httpOnly: true
  }
}));



app.use("/", authRoutes);
app.use("/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});