const { exec } = require('child_process');

// Command Injection
exec('rm -rf /tmp/vuln_dir', (err, stdout, stderr) => {
  if (err) console.error('Error:', err);
  else console.log('Directory removed');
});
