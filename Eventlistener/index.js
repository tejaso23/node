const express = require('express')
const  Eventemitter = require('events');
const app = express();
const event = new Eventemitter();

let count =0;
event.on("countapi",()=>{
    count++;
    console.log("event called:"+count);
})

app.post('/',(req,res)=>{
      res.send("api called");
      event.emit('countapi');
});

app.post('/search',(req,res)=>{
    res.send("api called");
    event.emit('countapi');
});


app.post('/watch',(req,res)=>{
    res.send("api called");
    event.emit('countapi');
});

app.listen(2000);