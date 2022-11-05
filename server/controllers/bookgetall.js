const Book = require("../models/Book");

const bookGetAll = async (req, res) => {
    const bookData = await Book.find();
    res.send(bookData);
}

module.exports = bookGetAll;