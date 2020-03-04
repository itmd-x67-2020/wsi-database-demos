const sqlite3 = require('sqlite3').verbose();

function connect(file = 'dev.sqlite3') {
  return new sqlite3.Database(file, (err) => {
    if (err) {
      console.log(err.message);
    }
    else {
      console.log(`Connected to the ${file} database`);
    }
  });
}

module.exports = {
  connect
}
