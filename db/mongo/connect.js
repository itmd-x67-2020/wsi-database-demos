const mongo = require('mongodb').MongoClient;
const assert = require('assert');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

async function connect(url) {
  let client = await mongo.connect(url, { useUnifiedTopology: true });
  return client;
}


module.exports = {
  connect
}
