const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname,'crud');
const filepath = `${dirpath}/onefile.txt`;

//file ---> created  fs.writeFileSync(filepath,'this is first file');

/*------>>   reading file  
 fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item);
});*/

/*
update file and give console message
fs.appendFile(filepath,' and the file name is one.txt',(err)=>{
    console.log("file is updated");
})*/

/*
file_renamed
fs.rename(filepath,`${dirpath}/newname.txt`,(err)=>{
    if(!err){
        console.log("added new fileat ");
    }
    
})
*/
//deleted file
fs.unlinkSync(`${dirpath}/onefile.txt`);

