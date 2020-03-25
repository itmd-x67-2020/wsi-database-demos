const mongo = require('mongodb').MongoClient;
const url = process.env.WX_NODE_MONGO_URL;

async function connect(url) {
  try {
    let client = await mongo.connect(url, { useUnifiedTopology: true});
    return client;
  } catch(err) {
    console.error(err.message);
  }
}

module.exports = {
  connect
}

/*
// Uncomment to diagnose connection script
(async function() {
  let c = await connect(url);
  if(c) {
    console.log("Connected successfully");
    c.close();
    console.log("Closed successfully");
  }
})();
*/
