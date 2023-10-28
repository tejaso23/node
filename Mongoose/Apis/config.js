const mongoose  = require("mongoose");

const url = "mongodb://localhost:27017";
dbname = "e-comm";

mongoose.connect(url + "/" + dbname);