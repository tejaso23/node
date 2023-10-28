const express = require('express');
const App = express();

App.get('',(req,res)=>{
    res.send(`<h1>Welcome,Home page</h1><a href="/about">Go to about page</a>`);
});

App.get('/about',(req,res)=>{
    res.send(`<input type ='text' placeholder = "User name" value = "${req.query.name}"></input><br><button>Click Here</button><a href="/about">Go to about page</a>`);
});

App.get('/help',(req,res)=>{
    res.send([{name:'tejas',email:'ntejas@gmail.com'},{name:'te',email:'ntejas.com'}]);
});

App.listen(4200);