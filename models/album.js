const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Album = new Schema({
  artists: [Schema.Types.Mixed],
  country: String,
  discogsId: { type: Number, unique: true },
  formats: [Schema.Types.Mixed],
  genres: [Schema.Types.Mixed],
  images: [Schema.Types.Mixed],
  labels: [Schema.Types.Mixed],
  notes: String,
  released: String,
  styles: [String],
  thumb: String,
  title: String,
  tracklist: [Schema.Types.Mixed],
  year: Number,
});

module.exports = mongoose.model('Album', Album);
