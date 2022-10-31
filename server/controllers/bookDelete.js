const bookDelete = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id)
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: 'Unable To Delete By this Id' })
    }
    return res.status(200).json({ message: 'Product Successfully Deleted' });
}

module.exports = bookDelete;