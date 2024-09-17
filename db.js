const { MongoClient } = require('mongodb');

const uri = "MongoDb connection String Here";
const client = new MongoClient(uri);

let db;
async function connectDB(){
  if (!db) {
    await client.connect();
    db = client.db('Sunmas');
  }
  return db;
}

connectDB()
  .then(() => {
    console.log("mongodb connected")
  })
  .catch(console.dir);

module.exports = { connectDB };
