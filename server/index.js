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

app.get('/book',async (req, res) => {
  const bookData =  await Book.find();
    res.send(bookData);
  });

app.get('/book/:id', async (req, res) => {
  const id = req.params.id
    let book;
    try{
        book = await Book.findById(id);
    } catch (err){
        console.log(err);
    }
    if(!book) {
        return res.status(500).json({message:'No Book Found'})
    }
    return res.status(201).json({ book });
})

app.put('/book/:id', async(req,res)=>{
  const id = req.params.id;
  const {name,author,description,price,available,image} = req.body
  let book;
  try{
      book = await Book.findByIdAndUpdate(id,{
          name,
          author,
          description,
          price,
          available,
          image
      });
      book = await book.save()
  }catch (err){
      console.log(err);
  }

  if(!book) {
      return res.status(404).json({message:'Unable To Update By this Id'})
  }
  return res.status(200).json({ book });
})

app.delete('/book/:id', async(req,res)=>{
  const id = req.params.id;
  let book;
  try{
      book = await Book.findByIdAndRemove(id)
  } catch (err) {
      console.log(err);
  }
  if(!book) {
      return res.status(404).json({message:'Unable To Delete By this Id'})
  }
  return res.status(200).json({ message:'Product Successfully Deleted' });
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