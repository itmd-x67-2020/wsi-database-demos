const mongo = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017";

const dbName = 'kastest';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log(`Environment: ${process.env.NODE_ENV}`);

const client = new mongo(url, { useUnifiedTopology: true });

client.connect(function(err) {

  assert.equal(null,err);
  console.log("Connected successfully to mongodb server");

  const db = client.db(dbName);
  client.close();

});
