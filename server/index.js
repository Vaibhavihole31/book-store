const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose')
const Book = require("./models/Book");

const health = require('./controllers/health');
const bookPost = require('./controllers/bookpost');
const bookGetAll = require('./controllers/bookgetall');
const bookGetId = require('./controllers/bookgetid');
const bookUpdate = require('./controllers/bookupdate');
const bookDelete = require('./controllers/bookDelete');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to DB 📦');
});

app.post('/health', health);

app.post('/book', bookPost);

app.get('/book', bookGetAll);

app.get('/book/:id', bookGetId);

app.put('/book/:id', bookUpdate);

app.delete('/book/:id', bookDelete);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});