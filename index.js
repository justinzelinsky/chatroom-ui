const express = require('express');
const http = require('http');
const path = require('path');
const proxy = require('express-http-proxy');

const PORT = process.env.PORT || 8082;
const app = express();
const httpServer = http.Server(app);

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

httpServer.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); // eslint-disable-line
