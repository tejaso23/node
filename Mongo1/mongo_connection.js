const {MongoClient} = require('mongodb'); // importing mongo
const url = 'mongodb://localhost:27017';    // storing mongo connection id

const connection = new MongoClient(url);   // connecting imorted mongo with mongo connection id 
const databaseName = 'e-comm';       //database name       



async function dbconnect(){
    let result  = await connection.connect();    // connnection established
    let db =  result.db(databaseName);            // connected with database name e -comm 
    return db.collection('products');  // conected with collection product
   
   
    //let response = await collectionConnect.find({}).toArray();
    //let insert = await collectionConnect.insertOne({name:"Apple",id:2});
    //let updt = await collectionConnect.updateOne({name:"Apple"},{$set:{id:5}})
   // let del = await collectionConnect.deleteOne({name:"Apple"});
    //console.log(response)
}

module.exports = dbconnect;