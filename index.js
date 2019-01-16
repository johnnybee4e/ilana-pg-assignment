const path = require("path");
const express = require("express");
const app = express();
// const router = require("./express");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, ".")));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", require("./express"));

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// app.use("/api", require("./express.js"));
