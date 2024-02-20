
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Book = require('./models/book');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://jell1umfish:dumanchik1337@cluster0.aa7euf6.mongodb.net/?retryWrites=true&w=majority');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('./public/index');
});

app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Other CRUD endpoints for books can be added similarly

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
