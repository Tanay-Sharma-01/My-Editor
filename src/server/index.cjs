const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 3001 || process.ENV;
app.use(
  cors({
    origin: "*"
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("yo")
});

app.get("/data", (req, res) => {
  console.log("called");
  res.send("Hello world");
});

app.post("/data", (req, res) => {
  console.log("hello your data is received");
  console.log(req.body)
  res.send("123456");
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
