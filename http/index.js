const axios = require('axios');

// SSRF
axios.get('http://169.254.169.254/latest/meta-data')
  .then(res => console.log('Metadata:', res.data))
  .catch(err => console.error('Error:', err.message));
