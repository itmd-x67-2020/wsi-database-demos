const db = require('./connect.js').connect();

const seed_data = [
  { date: '2020-02-29', max: 42.4, min: 17.1 , avg: 29.4 },
  { date: '2020-03-01', max: 52.1, min: 22.1 , avg: 26.4 },
  { date: '2020-03-02', max: 47.9, min: 33.2 , avg: 30.4 }
];


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

  let stmt = db.prepare(`INSERT INTO daily_records(obs_date,max_temp,min_temp,avg_temp) VALUES (?,?,?,?)`);

  for (let d of seed_data) {
    console.log("Values:",d.date,d.max,d.min,d.avg);
    stmt.run(d.date,d.max,d.min,d.avg);
  }

  stmt.finalize();

  db.each("SELECT max_temp FROM daily_records", (err,row) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Max temp:", row.max_temp);
    }
  });

});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Database connection closed');
});
