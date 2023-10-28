const mongoose = require("mongoose");
const url = 'mongodb://localhost:27017';
const db = "e-comm";



//Schema
    
const Pschema = new mongoose.Schema({
    name:String,
    country:String
});

mongoose.connect(url+"/"+db);
const saveDB = async ()=>{
   
//  Model
    const CollectionModel =  mongoose.model('products',Pschema);
    const data  = new CollectionModel({name:"14 pro max",country:"India"});
    
     const result = await data.save();
     console.warn(data);
}
//saveDB();


const updateDB = async() =>{
     
   const model = mongoose.model('products',Pschema);
   const updating = await  model.updateOne({name:"14 pro max"},{$set:{
        name:"Lava series",
        country:"india"
   }});
     console.log(updating);
}

//updateDB();

const dltDB = async () =>{
    const model = mongoose.model('products',Pschema);
    let data = await model.deleteOne({name:"14 pro"});
    console.log(data);
};

//dltDB();

const readDB =  async () =>{
    const model = mongoose.model('products',Pschema);
    let data = await model.find();
    console.log(data);
};

readDB();