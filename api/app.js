const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const next = require('next');
const middleware = require('./middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    const server = express();

    server.use(middleware.auth.session);
    server.use(middleware.passport.initialize());
    server.use(middleware.passport.session());

    server.get('/', (req, res) => app.render(req, res, '/', req.query));
    server.get('*', handle);

    server.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch(err => console.log(err));


