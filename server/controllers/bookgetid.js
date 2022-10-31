const bookGetId = async (req, res) => {
    const id = req.params.id
    let book;
    try {
        book = await Book.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(500).json({ message: 'No Book Found' })
    }
    return res.status(201).json({ book });
}

module.exports = bookGetId;