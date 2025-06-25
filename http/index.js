const express = require('express');
const axios = require('axios');
const app = express();

// SSRF
app.get('/fetch', async (req, res) => {
  const url = req.query.url;
  try {
    const resp = await axios.get(url);
    res.send(resp.data);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.listen(3000, () => console.log('HTTP vuln on port 3000'));