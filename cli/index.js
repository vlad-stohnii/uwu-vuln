const { execFile } = require('child_process');
const fs = require('fs');

const userArg = process.argv[2] || '';

if (!/^[\\w.-]+$/.test(userArg)) {
  console.error('[!] Invalid argument');
  process.exit(1);
}

fs.rm('/tmp/vuln_dir', { recursive: true, force: true }, (err) => {
  if (err) {
    console.error('[!] Failed to remove directory:', err);
    return;
  }

  execFile('ls', [userArg], (err, stdout, stderr) => {
    if (err) {
      console.error('[!] ls failed:', err);
      return;
    }
    console.log('[+] ls output:\n', stdout);
  });
});
