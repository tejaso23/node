const express = require("express");
require("./config");
const CollectionModel = require("./product2");

const app = express();

app.use(express.json());


app.get('/search/:key',async (req,res)=>{

    const search_data = await CollectionModel.find(
       { "$or":[
            {name:{$regex:req.params.key}},
            {brand:{$regex:req.params.key}},
          //only string field  {_id:{$regex:req.params.key}}
        ]}
    );
    res.send(search_data);
    console.log(search_data);
    
})

app.listen(1000);