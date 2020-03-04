const db = require('./connect.js').connect();


db.close((err) => {
  if (err) {
    console.err(err.message);
  }
  console.log('Database connection closed');
});
