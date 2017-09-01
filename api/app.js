const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const session = require('express-session');
const next = require('next');
const user = require('./user');
const db = require('../models');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) => app.render(req, res, '/', req.query));
    server.get('*', handle);

    server.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch(err => console.log(err));

