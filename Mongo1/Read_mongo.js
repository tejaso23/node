const dbconnect = require('./mongo_connection');

//using promise means using (then)
/*dbconnect().then((resp)=>{
   resp.find({name:"Apple"}).toArray().then((data)=>{
    console.log(data)
   })
})
console.warn(dbconnect());
*/


//using async and await 
const find  = async ()=>{
    
  let data  = await dbconnect();
  data = await data.find().toArray();
  console.log(data);
}
find();