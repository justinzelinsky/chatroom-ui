const express = require('express');
const http = require('http');
const path = require('path');

const PORT = process.env.PORT || 8082;
const app = express();
const httpServer = http.Server(app);

app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

httpServer.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); // eslint-disable-line
