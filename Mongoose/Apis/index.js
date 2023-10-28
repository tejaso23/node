const express = require("express");
require("./config");
const CollectionModel = require("./product2");

const app = express();

app.use(express.json());

//post
app.post("/create", async (req, res) => {
  const data = new CollectionModel(req.body);
  const result = await data.save();
  res.send(data);
  console.log(data + "::added sucessfull");
});

//find
app.get("/list", async (req, res) => {
  const data = await CollectionModel.find();
  res.send(data);
  console.log("qurey listed:" + data);
});

//delete
app.delete("/delete/:_id", async (req, res) => {
  const dlt_data = await CollectionModel.deleteOne(req.params);

  res.send(dlt_data + ":deleted sucessfully");
});

//update
app.put("/update/:_id", async (req, res) => {
    
  
  const data = await CollectionModel.updateOne(req.params, {
    $set: { name: req.body.name},
  });
  console.log(data);
  res.send(data);
});

app.listen(3500);
