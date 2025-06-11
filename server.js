const express= require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const uri= process.env.MONGO_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const moodRoutes = require('./routes/moodRoutes');
app.use('/api/mood', moodRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to VibeLog API');
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");    
}
);