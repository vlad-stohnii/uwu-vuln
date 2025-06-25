const { exec } = require('child_process');

// CLI-injection
exec('rm -rf /tmp/vuln_temp', (err, stdout, stderr) => {
  if (err) console.error('Error:', err);
  else console.log('Temp directory wiped');
});
