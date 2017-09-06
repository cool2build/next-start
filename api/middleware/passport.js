const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const TwitterStategy = require('passport-twitter').Strategy;
const { User } = require('../../models');
const config = require('config')['passport'];
const colors = require('colors');

passport.serializeUser((profile, done) => {
  done(null, profile.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(result => done(null, result.dataValues))
    .catch(err => {
      console.log('deserializeUser error: '.red, err);
      done(err, false);
    });
});

passport.use(new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL,
  profileFields: ['id', 'name', 'email', 'photos']
}, (accessToken, refreshToken, profile, done) => {
  let email = profile.emails[0].value;
  let facebook_id = profile.id;

  User.findOne({
    where: {
      $or: [
        { facebook_id },
        { email }
      ]
    }
  })
    .then(async user => {
      if (user && !user.dataValues.facebook_id) {
        await user.update({ facebook_id });
      } else if (!user) {
        user = await User.create({
          email: email,
          facebook_id: facebook_id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          facebook_profile_image: profile.photos[0].value
        });
      }
      done(null, user.dataValues);
    })
    .catch(err => {
      done(err, false);
    });
}));

passport.use(new GoogleStrategy({
  clientID: config.google.clientID,
  clientSecret: config.google.clientSecret,
  callbackURL: config.google.callbackURL
}, (accessToken, refreshToken, profile, done) => {
  let email = profile.emails[0].value;
  let google_id = profile.id;

  User.findOne({
    where: {
      $or: [
        { google_id },
        { email }
      ]
    }
  })
    .then(async user => {
      if (user && !user.dataValues.google_id) {
        await user.update({ google_id });
      } else if (!user) {
        user = await User.create({
          email: email,
          google_id: google_id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          google_profile_image: profile.photos[0].value
        });
      }
      done(null, user.dataValues);
    })
    .catch(err => {
      console.log('google oauth err: '.red, err);
      done(err, false);
    });
}));

passport.use(new TwitterStategy({
  consumerKey: config.twitter.consumerKey,
  consumerSecret: config.twitter.consumerSecret,
  callbackURL: config.twitter.callbackURL,
  includeEmail: true
}, (token, tokenSecret, profile, done) => {
  let email = profile.emails[0].value;
  let twitter_id = profile.id;

  User.findOne({
    where: {
      $or: [
        { twitter_id },
        { email }
      ]
    }
  })
    .then(async user => {
      if (user && !user.dataValues.twitter_id) {
        await user.update({ twitter_id });
      } else if (!user) {
        user = await User.create({
          email: email,
          twitter_id: twitter_id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          twitter_profile_image: profile.photos[0].value
        });
      }
      done(null, user.dataValues);
    })
    .catch(err => {
      console.log('twitter oauth err: '.red, err);
      done(err, false);
    });
}));

module.exports = passport;