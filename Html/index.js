const express = require("express");
const app = express();
const path = require("path");

const publicpath = path.join(__dirname, "public");
//app.use(express.static(publicpath))
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.sendFile(`${publicpath}/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicpath}/about.html`);
});

app.get("/profile", (req, res) => {
    const user= {name:'tejas',email:'ntejas023',number:'88846513',skills:['php','c++','java']};
  res.render("profile.ejs",{user});
});

app.get("/login",(req,res)=>{
   res.render('login.ejs');
})


app.get("*", (req, res) => {
   
  res.sendFile(`${publicpath}/nopage.html`);
});

app.listen(4500);
