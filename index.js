const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
const proxy = require('express-http-proxy');

const PORT = process.env.PORT || 8082;
const serverKey = path.join(__dirname, '.ssl/server.key');
const serverCert = path.join(__dirname, '.ssl/server.cert');
const app = express();
const httpsServer = https.Server(
  {
    key: fs.readFileSync(serverKey),
    cert: fs.readFileSync(serverCert)
  },
  app
);

app.use(express.static('dist'));
app.use(
  '/api',
  proxy('localhost:8083', {
    proxyReqPathResolver: req => `/api${req.url}`
  })
);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

httpsServer.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
