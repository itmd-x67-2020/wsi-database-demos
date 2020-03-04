const db = require('./connect.js').connect();


db.serialize(() => {
  let drop_table = `DROP TABLE IF EXISTS daily_records`;
  db.run(drop_table, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
  let create_table = `CREATE TABLE daily_records
    ( id INTEGER PRIMARY KEY AUTOINCREMENT,
      obs_date TEXT,
      max_temp DECIMAL(4,1),
      min_temp DECIMAL(4,1),
      avg_temp DECIMAL(4,1)
    )`;
  db.run(create_table, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
});

db.close((err) => {
  if (err) {
    console.err(err.message);
  }
  console.log('Database connection closed');
});
