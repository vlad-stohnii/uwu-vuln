const { exec } = require('child_process');
const userArg = process.argv[2];               // например: "; rm -rf /"
exec(`ls ${userArg}`, (err, stdout, stderr) => {
  if (err) console.error(err);
  else console.log(stdout);
});
