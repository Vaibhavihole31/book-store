const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose')
const Book = require("./models/Book")

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to DB 📦');
});

app.post('/health', (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running"
  })
})

app.post('/book', async (req, res) => {
  const { name, author, description, price, available, image } = req.body

  const newBook = new Book({
    name,
    author,
    description,
    price,
    available,
    image
  })

  const savedBook = await newBook.save();
  res.json({
    success: true,
    data: savedBook,
    message: "New Book is added Successfully!"
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});