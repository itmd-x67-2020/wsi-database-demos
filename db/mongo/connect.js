const mongo = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017";

const dbName = 'kastest';

const client = new mongo(url);

client.connect(function(err) {

  assert.equal(null,err);
  console.log("Connected successfully to mongodb server");

  const db = client.db(dbName);
  client.close();

});
