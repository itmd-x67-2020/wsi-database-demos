const db = require('./connect.js').connect();

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closed the database connection');
});
