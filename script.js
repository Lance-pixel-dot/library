const bookDisplay = document.querySelector('.card-container');

const myLibrary = [];

function book(title, author, pages, genre, date){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.date = date;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookGenre, bookDate){
    bookTitle = 'Book Name'
    bookAuthor = 'Book Author'
    bookPages = 'Book Pages'
    bookGenre = 'Book Genre'
    bookDate = 'Book Date'

    const newBook = new book(bookTitle, bookAuthor, bookPages, bookGenre, bookDate);

    const newBook2 = new book('Book2Title', 'Book2Author', 'Book2Pages', 'Book2Genre', 'Book2Date')

    myLibrary[0] = `${newBook.title}, ${newBook.author}, ${newBook.pages}, ${newBook.genre}, ${newBook.date}`;

    myLibrary[1] = `${newBook2.title}, ${newBook2.author}, ${newBook2.pages}, ${newBook2.genre}, ${newBook2.date}`;
    
    console.log(myLibrary)
}

function displayBook(){
    let createDiv;

    for(let i = 0; i < myLibrary.length; i++){
        createDiv = document.createElement('div');
        createDiv.setAttribute('class', 'cards');
        bookDisplay.appendChild(createDiv);
        createDiv.textContent = myLibrary[i];
    }
}

addBookToLibrary();
displayBook();