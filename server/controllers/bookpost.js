const Book = require("../models/Book");

const bookPost = async (req, res) => {
  const { name, author, description, price, image } = req.body

  const newBook = new Book({
    name,
    author,
    description,
    price,
    image
  })

  const savedBook = await newBook.save();
  res.json({
    success: true,
    data: savedBook,
    message: "New Book is added Successfully!"
  })
}

module.exports = bookPost;