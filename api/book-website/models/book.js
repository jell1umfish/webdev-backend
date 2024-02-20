const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: String,
    // Add more fields as needed
});

const Book = new mongoose.model('Book', bookSchema);

module.exports = Book;