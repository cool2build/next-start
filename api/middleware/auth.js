const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const config = require('config')['redis'];

const client = redis.createClient(6379, config.host);

module.exports.session = session({
  store: new RedisStore({ client }),
  secret: 'no-line',
  resave: false,
  saveUninitialized: false
});

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
<<<<<<< HEAD
  res.redirect('/signin');
=======
  res.redirect('/auth/login');
>>>>>>> added passport with facebook
};