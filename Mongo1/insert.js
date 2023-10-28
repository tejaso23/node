const dbconnect = require('./mongo_connection');

const insert = async ()=>{
    let data  = await dbconnect();
    data =  await data.insertOne({name:"oppo",id:2});
    console.log(data);

}

insert();