const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('config')['passport'];

passport.serializeUser((profile, done) => {
  done(null, profile.id);
});

passport.deserializeUser((id, done) => {
  // find user by id
});

passport.use('facebook', new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL,
  profileFields: ['id', 'name', 'emails', 'picture']
}, (accessToken, refreshToken, profile, done) => {
  // find or create user
}));

module.exports = passport;