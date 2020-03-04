const sqlite = require('sqlite3').verbose();

function connect(database = 'development.sqlite3') {
  return new sqlite.Database(database,(err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Connected to the database ${database}`);
    }
  });
}

module.exports = {
  connect
}
