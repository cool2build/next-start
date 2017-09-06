module.exports = (db, DataTypes) => {
  const User = db.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    google_id: {
      type: DataTypes.STRING,
      unique: true
    },
    facebook_id: {
      type: DataTypes.STRING,
      unique: true
    },
    twitter_id: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true
    },
    facebook_profile_image: DataTypes.TEXT,
    google_profile_image: DataTypes.TEXT,
    twitter_profile_image: DataTypes.TEXT,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  });
  return User;
};

// const bcrypt = require('bcryptjs');
// const crypto = require('crypto');

// const instanceMethods = {
//   getGravatarUrl: function(size) {
//     if (!size) size = 200;

//     if (!this.email) {
//       return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
//     }

//     var md5 = crypto.createHash('md5').update(this.email).digest('hex');
//     return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
//   },

//   getProfilePicture: function(size) {
//     if(this.profile && this.profile.picture != null)
//       return this.profile.picture;

//     return this.getGravatarUrl(size);
//   },

//   hasSetPassword: function() {
//     return this.password != null && this.password.length > 0;
//   }
// };

// const beforeSaveHook = function(user, options, fn) {
//   if(user.changed('password')) {
//     this.encryptPassword(user.password, function(hash, err) {
//       user.password = hash;
//       fn(null, user);
//     });
//     return;
//   }
//   fn(null, user);
// };

// module.exports = function(db, DataTypes) {
//   let User = db.define('User', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     password: DataTypes.STRING,
//     google_id: {
//       type: DataTypes.STRING,
//       unique: true,
//     },
//     facebook_id: {
//       type: DataTypes.STRING,
//       unique: true,
//     },
//     twitter_id: {
//       type: DataTypes.STRING,
//       unique: true,
//     },
//     github_id: {
//       type: DataTypes.STRING,
//       unique: true,
//     },
//     reset_password_expires: DataTypes.DATE,
//     reset_password_token: DataTypes.STRING,
//     created_at: DataTypes.DATE,
//     updated_at: DataTypes.DATE,
//     login_count: DataTypes.INTEGER,
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//       isEmail: true
//     },
//     tokens: DataTypes.JSON
//   }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return User;
// };
