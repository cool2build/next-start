const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const session = require('express-session');
const next = require('next');
const user = require('./user');
const db = require('../models');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev, quiet: false })
const handle = app.getRequestHandler();
const middleware = require('./middleware');
const port = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    const server = express();

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

