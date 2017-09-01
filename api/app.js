const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
<<<<<<< HEAD
const next = require('next');
const middleware = require('./middleware');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
=======
const session = require('express-session');
const next = require('next');
const user = require('./user');
const db = require('../models');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev, quiet: false })
const handle = app.getRequestHandler();
const middleware = require('./middleware');
>>>>>>> added LRUCache and re-configured server
const port = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    const server = express();
<<<<<<< HEAD

    server.use(middleware.auth.session);
    server.use(middleware.passport.initialize());
    server.use(middleware.passport.session());

    // pages endpoint
    server.get('/', (req, res) => app.render(req, res, '/', req.query));
    server.get('/signin', (req, res) => app.render(req, res, '/signin', req.query));

    // data endpoint
    server.use('/auth', routes.auth);
    server.get('*', handle);

    server.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch(err => console.log(err));
=======

    server.get('/', (req, res) => middleware.renderAndCache(app, req, res, '/'));

    server.get('*', handle);
  //   let app = express();
  //   app.server = http.createServer(app);

  //   app.use(cors({
  //     exposedHeaders: config.corsHeaders
  //   }));

  //   app.use(bodyParser.json({
  //     limit : config.bodyLimit
  //   }));

  //   // internal middleware
  //   //app.use(middleware({ config, db  }));

  //   // api router
  //   user(app, config, db); //This is the extra line

  //   app.get('*', (req, res) => handle(req, res))

  //   app.server.listen(process.env.PORT || config.port);

  //   console.log(`Started on port ${app.server.address().port}`);
  // })
  // .catch(err => {
  //   console.log(err.stack);
    server.listen(port, () => console.log(`listening on port ${port}`));
  });
>>>>>>> added LRUCache and re-configured server

