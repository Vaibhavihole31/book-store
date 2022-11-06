const Book = require("../models/Book");

const bookUpdate = async (req, res) => {
    let result = await Book.updateOne(
        {_id :req.params.id},
        {
            $set : req.body
        }
    )
    res.send(result)

}

module.exports = bookUpdate;

