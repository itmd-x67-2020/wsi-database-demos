const db = require('./connect.js').connect();

let drop = `DROP TABLE IF EXISTS daily_records`;
let table = `CREATE TABLE daily_records (
    record_id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    max_temp DECIMAL(4,1),
    min_temp DECIMAL(4,1),
    avg_temp DECIMAL(4,1)
  )`;
let data = [
  { date: '2020-03-01', max: 61.3, min: 31.5, avg: 46.7 }
]

db.serialize(() => {
  db.run(drop, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Old table dropped');
  });
  db.run(table, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Table created');
  });
  let stmt = db.prepare(`INSERT INTO daily_records(date,max_temp,min_temp,avg_temp) VALUES (?,?,?,?)`);
  for (let d of data) {
    console.log(`${d.date},${d.max},${d.min},${d.avg}`)
    stmt.run(d.date,d.max,d.min,d.avg);
  }
  stmt.finalize();
  db.each(`SELECT max_temp FROM daily_records`, (err,row) => {
    console.log("Max temp:", row.max_temp);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closed the database connection');
});
