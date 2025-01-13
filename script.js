const bookDisplay = document.querySelector('.card-container');
const displayForm = document.querySelector('.form-button');
const selForm = document.querySelector('.fill-up-form');
const formSub = document.querySelector('.submit-form');
const getTitle = document.querySelector('#book-title');
const getAuthor = document.querySelector('#book-author');
const getGenre = document.querySelector('#book-genre');
const getPages = document.querySelector('#book-pages');
const getDate = document.querySelector('#book-release');
const getRadio = document.getElementsByName('book-read');
const dialog = document.querySelector('dialog');
const closeDialog = document.querySelector('.close-dialog');

const myLibrary = [];

function book(title, author, genre, pages, date, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.date = date;
    this.read = read;
}

book.prototype.info = function(){
    return `Title:${this.title} Author:${this.author} Genre:${this.genre} Pages:${this.pages} Release Date:${this.date} Have you read it yet:${this.read}`
}

function addBookToLibrary(bookTitle, bookAuthor, bookGenre, bookPages, bookDate, bookRead){

    const newBook = new book(bookTitle, bookAuthor, bookGenre, bookPages, bookDate, bookRead);
    myLibrary.push(newBook.info());
    displayBook();

}

function displayBook(){
    let createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'cards');
    bookDisplay.appendChild(createDiv);

    for(let i = 0; i < myLibrary.length; i++){
        createDiv.textContent = myLibrary[i];
    }
}

selForm.addEventListener('submit', (e) => {
    e.preventDefault();  
})

displayForm.addEventListener('click', () => {
    dialog.showModal();
})

closeDialog.addEventListener('click', () => {
    dialog.close();
})

formSub.addEventListener('click', () => {

    let getRadioResult = '';

    getRadio.forEach(e => {
        if (e.checked){
            getRadioResult = e.value;
        }
    });

    if(getTitle.value !== '' &&
       getAuthor.value !== '' &&
       getGenre.value !== '' &&
       getPages.value !== '' &&
       getDate.value !== '' &&
       getRadioResult !== ''
    ){
        addBookToLibrary(getTitle.value, getAuthor.value, getGenre.value, getPages.value, getDate.value, getRadioResult);
    }

})

