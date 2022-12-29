const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);

async function connectToDB() {
  await client.connect();
  const db = client.db("test");
  const collection = db.collection("students");
  return collection;
}

module.exports = {
  connectToDB,
};
