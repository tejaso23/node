const dbconnect = require("./mongo_connection");

const updating = async ()=>{
    let data = await dbconnect();
    data = await data.updateOne({name:"Apple"},{set$:{name:"Oppo"}});
   console.log(data);
}

updating();