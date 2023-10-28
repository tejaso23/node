const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname,'files');
console.warn(dirpath);

//for(let i=0;i<5;i++){   fs.writeFileSync(`${dirpath}/Hello${i+1}.txt`,`file number ${i+1}`);}
fs.readdir(dirpath,(err,files)=>{
    files.forEach((i)=>{
        console.log(i);
    })
});