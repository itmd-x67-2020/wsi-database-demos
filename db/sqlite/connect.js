const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('development.sqlite3',(err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the database');
  }
});

db.close((err) => {
  if (err) {
    console.err(err.message);
  }
  console.log('Database connection closed');
});
