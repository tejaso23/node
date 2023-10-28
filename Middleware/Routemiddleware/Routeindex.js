const express = require("express");
const app = express();
const reqFilter = require("./Routelevel");

//1.
app.get("/",reqFilter,(req, res) => {
    res.send("Home");
  });
//2.
const route = express.Router();

route.use(reqFilter);

route.get("/contact", (req, res) => {
    res.send("contact");
  });
  

app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/help", (req, res) => {
  res.send("helpe");
});
app.use("/",route);
app.listen(4800);
