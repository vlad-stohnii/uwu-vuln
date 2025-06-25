const fs = require('fs');

// Path Traversal
const data = fs.readFileSync('/etc/passwd', 'utf8');
console.log(data);
