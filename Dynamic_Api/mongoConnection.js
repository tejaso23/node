const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const databaseName = 'e-comm';
const connection = new MongoClient(url);


async function connectdb(){

    let connect_done = await connection.connect();
    let usedb = connect_done.db(databaseName);
    let collection_used = usedb.collection('products');
    return collection_used;
}

module.exports = connectdb;