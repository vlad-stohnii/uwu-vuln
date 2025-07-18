const express = require('express');
const axios = require('axios');
const { URL } = require('url');
const app = express();

// SSRF
app.get('/fetch', async (req, res) => {
  const url = req.query.url;
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch (e) {
    return res.status(400).send('Invalid URL');
  }
  const hostname = parsedUrl.hostname;
  if (!['http:', 'https:'].includes(parsedUrl.protocol) ||
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '::1' ||
      /^(10|127)\./.test(hostname) ||
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname) ||
      /^192\.168\./.test(hostname)) {
    return res.status(400).send('URL not allowed');
  }
  try {
    const resp = await axios.get(url);
    res.send(resp.data);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.listen(3000, () => console.log('HTTP vuln on port 3000'));
