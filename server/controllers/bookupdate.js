const bookUpdate = async (req, res) => {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save()
    } catch (err) {
        console.log(err);
    }

    if (!book) {
        return res.status(404).json({ message: 'Unable To Update By this Id' })
    }
    return res.status(200).json({ book });
}

module.exports = bookUpdate;