const Mongo = require('mongodb').MongoClient;
const url = process.env.WX_NODE_MONGO_URL;

const db_name = "wsi-test";

const client = new Mongo(url, { useUnifiedTopology: true });

client.connect(function(err) {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected successfully to server");
    const db = client.db(db_name);
    client.close();
  }
});
