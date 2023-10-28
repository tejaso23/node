const mongoose = require("mongoose");
const url = 'mongodb://localhost:27017';
const db = "e-comm";



//Schema
    
const Pschema = new mongoose.Schema({
    name:String,
    country:String
});


const main = async ()=>{
    await mongoose.connect(url+"/"+db);
   


//  Model
    const CollectionModel = mongoose.model('products',Pschema);

 let data = new CollectionModel({name:"m8",country:"china"});
 let result = await data.save();
 console.log(result);
}

main();