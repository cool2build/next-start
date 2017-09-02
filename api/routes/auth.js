const router = require('express').Router();
const middleware = require('../middleware');

router.get('/session', (req, res) => {
  // return session info
});

router.get('/facebook', middleware.passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));

router.get('/facebook/callback', middleware.passport.authenticate('facebook', {
  failureRedirect: '/signin'
}), (req, res) => {
  res.redirect('/');
});

module.exports = router;
