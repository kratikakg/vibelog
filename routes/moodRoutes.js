const express = require('express');
const router = express.Router();
const MoodLog = require('../models/moodlog');

const suggestions = {
  happy: {
    quote: "Happiness is contagious ✨",
    song: "Happy - Pharrell Williams",
    movie: "Zindagi Na Milegi Dobara"
  },
  sad: {
    quote: "This too shall pass.",
    song: "Let Her Go - Passenger",
    movie: "The Pursuit of Happyness"
  },
  anxious: {
    quote: "You're doing better than you think.",
    song: "Weightless - Marconi Union",
    movie: "Inside Out"
  },
  angry: {
    quote: "Breathe. Respond, don't react.",
    song: "Lose Yourself - Eminem",
    movie: "John Wick"
  },
  excited: {
    quote: "Dream big. Start now.",
    song: "On Top of the World - Imagine Dragons",
    movie: "La La Land"
  }
};

router.post('/', async (req, res) => {
  const { mood, entry } = req.body;

  if (!mood || !(mood in suggestions)) {
    return res.status(400).json({ error: 'Invalid or missing mood' });
  }

  const mediaSuggestions = suggestions[mood];

  try {
    const newMoodLog = new MoodLog({
      mood,
      entry,
      mediaSuggestions
    });

    const savedLog = await newMoodLog.save();
    res.status(201).json(savedLog);
  } catch (err) {
    console.error('Error saving mood log:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const logs = await MoodLog.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (err) {
    console.error('Error fetching moods:', err);
    res.status(500).json({ error: 'Error fetching moods' });
  }
});

module.exports = router;