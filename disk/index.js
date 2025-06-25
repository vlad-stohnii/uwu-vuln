const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Path Traversal
app.get('/read', (req, res) => {
  const file = req.query.file;
  const fullPath = path.join(__dirname, file);
  fs.readFile(fullPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send(err.message);
    res.send(data);
  });
});

app.listen(3001, () => console.log('Disk vuln on port 3001'));
