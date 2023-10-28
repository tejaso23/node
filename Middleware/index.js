const express = require('express');

const app = express();


const reqFilter = (req,res,next) =>{
    if(!req.query.age){
        res.send('<h1>Provide age</h1>');
    }else if(req.query.age > 18){
           next();
    }else{
        res.send('<h1>age is not supported</h1>');
        
    }
    
}

app.use(reqFilter);
app.get('/',(req,res)=>{
res.send('<h1>welcome to home</h1>')
});

app.get('/about',(req,res)=>{
    res.send('<h1>welcome to about</h1>')
    });

app.get('/help',(req,res)=>{
        res.send('<h1>welcome to help</h1>')
        });
app.listen(3500);