const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  albums: [Schema.Types.Mixed],
  artists: [Schema.Types.Mixed],
  email: String,
  firstName: String,
  lastName: String,
  passwordReset: { type: String, select: false },
  username: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
