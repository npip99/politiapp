const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

const { localOfficials, stateOfficials } = require("./officialsList.js");
const { localBudget, stateBudget } = require("./budgetList.js");
const list = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/state/fl/officials", (req, res) => {
  res.send(JSON.stringify(stateOfficials));
});

app.get("/county/099/officials", (req, res) => {
  res.send(JSON.stringify(localOfficials));
});

app.get("/state/fl/budget", (req, res) => {
  res.send(JSON.stringify(stateBudget));
});

app.get("/county/099/budget", (req, res) => {
  res.send(JSON.stringify(localBudget));
});

app.post("/contact", (req, res) => {
  console.log("req.body", req.body);
  list.push(req.body);
  res.send(JSON.stringify(req.body));
});
app.get("/contact", (req, res) => {
  res.send(JSON.stringify(list));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
