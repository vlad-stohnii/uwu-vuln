const { exec } = require('child_process');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();  // любая команда из stdin
  exec(cmd, (err, stdout, stderr) => {
    if (err) console.error(err);
    else console.log(stdout);
  });
});
