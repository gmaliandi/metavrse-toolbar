const path = require('path');
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'TEST';
const dir = __dirname;
const app = next({ dev, dir });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

module.exports = app.prepare().then(() => {
  const server = express();

  server.use('/vs', express.static(path.join(__dirname, '/vs')));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  return server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.info(`Ready on http://localhost:${port}`);
  });
});
