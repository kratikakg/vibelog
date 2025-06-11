const mongoose = require('mongoose');

const MoodLogSchema = new mongoose.Schema({
  mood: {
    type: String,
    enum: ['happy', 'sad', 'anxious', 'angry', 'excited'],
    required: true
  },
  entry: {
    type: String
  },
  mediaSuggestions: {
    quote: String,
    song: String,
    movie: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('MoodLog', MoodLogSchema);