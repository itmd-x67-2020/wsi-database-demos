const fsp = require('fs').promises;

(async function() {
  try {
    // Provide 'utf8' encoding argument to readFile; see
    // https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
    const records = await fsp.readFile('./wx_records.json','utf8');
    // Log the raw records file contents as returned
    console.log(records);
  } catch(err) {
    console.log(err.message);
  }
})();
