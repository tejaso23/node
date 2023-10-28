const express = require("express");
const app = express();

const connectdb = require("./mongoConnection");

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await connectdb();
  data = await data.find().toArray();
  resp.send(data);
  console.log(data);
});

app.post("/", async (req, resp) => {
  let data = await connectdb();
  let result = await data.insertOne(req.body);
  resp.send(req.body);

  if (result) {
    console.log("data added to dATABASE");
  }
});

app.put("/:name", async (req, resp) => {
  let data = await connectdb();
  let result = await data.updateMany({name:req.params.name},{$set:req.body});
  console.log(req.body);
  
  resp.send({ result: "updated" });
});

app.delete("/:id",async (req,res)=>{
   let data  = await connectdb();
  
   let result = await data.deleteOne({id:Number(req.params.id)});
   //for deleting ongo _id which is object  = await data.deleteOne({_id:new mongodb.ObjectID(req.params.id)});
  res.send(result);
})


app.listen(3900);
