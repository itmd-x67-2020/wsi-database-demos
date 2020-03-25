const fsp = require('fs').promises;

(async function() {
  try {
    // Provide 'utf8' encoding argument to readFile; see
    // https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
    const records = await fsp.readFile('./wx_records.json','utf8');
    // Parse the records file
    const records_obj = JSON.parse(records);
    // Log the raw records file contents as returned
    console.log(records);
    // Log, as an example, the max_temp record's value
    console.log("Max Temp:", records_obj.records.max_temp.value)
  } catch(err) {
    console.log(err.message);
  }
})();
