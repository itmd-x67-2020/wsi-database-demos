const fsp = require('fs').promises;

(async function() {
  try {
    const records = await fsp.readFile('./wx_records.json');
    console.log(records);
  } catch(err) {
    console.log(err.message);
  }
})();
