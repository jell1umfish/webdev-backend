document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/books')
        .then(response => response.json())
        .then(data => {
            const bookListContainer = document.getElementById('bookList');

            data.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.classList.add('book-item');

                const titleElement = document.createElement('h2');
                titleElement.textContent = book.title;

                const authorElement = document.createElement('p');
                authorElement.textContent = 'Author: ' + book.author;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = book.description;

                bookItem.appendChild(titleElement);
                bookItem.appendChild(authorElement);
                bookItem.appendChild(descriptionElement);

                bookListContainer.appendChild(bookItem);
            });
        })
        .catch(error => console.error('Error fetching books:', error));
});