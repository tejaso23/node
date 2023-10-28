const dbconnect = require('./mongo_connection');
//just pass array of objects in insertMany
const insert = async ()=>{
    let data  = await dbconnect();
    data =  await data.insertMany([{name:"Samsung",id:9},{name:"Samsung",id:12},{name:"Samsung",id:22}]);
    console.log(data);

}

insert();