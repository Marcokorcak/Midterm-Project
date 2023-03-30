const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { json } = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const db = require("./db");

app.listen(5000, () => {
  console.log("server from port 5432"); //server running on port 5000
});

//middleware

app.use(cors());
app.use(express.json()); //req.body
app.use(compression());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

//signup routes / login routes

app.post("/users", db.signup);
app.post("/login", db.login);

//bank routes

app.get("/accountlistsavings", db.getSavingsAccount);
app.get("/accountlistchecking", db.getCheckingAccount);
app.put("/accountlist/:id", db.incrementAccount);
