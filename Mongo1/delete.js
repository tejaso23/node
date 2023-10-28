const dbconnect = require('./mongo_connection');


const deleting = async ()=>{
    let dlt = await dbconnect();
    dlt =  await dlt.deleteOne({name:"Samsung"});
    
    console.log(dlt);

}

deleting()

deleting()