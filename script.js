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
const dialogTwo = document.querySelector('.dialog-two');
const closeDialog = document.querySelector('.close-dialog');
const closeDialogTwo = document.querySelector('#close-two');
const deleteBook = document.querySelector('.delete-book');

const myLibrary = [];

function Book(title, author, genre, pages, date, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.date = date;
    this.read = read;
}

function addBookToLibrary(bookTitle, bookAuthor, bookGenre, bookPages, bookDate, bookRead){

    const newBook = new Book(bookTitle, bookAuthor, bookGenre, bookPages, bookDate, bookRead);

    myLibrary.push(newBook);

    let createDiv = document.createElement('div');
    let createButton = document.createElement('button');
    let createTitleP = document.createElement('p');
    let createAuthorP = document.createElement('p');
    let createGenreP = document.createElement('p');
    let createPagesP = document.createElement('p');
    let createDateP = document.createElement('p');
    let createReadP = document.createElement('p');
    let createChangeRead = document.createElement('button');

    createButton.textContent = 'Remove Book';
    createChangeRead.textContent = 'Toggle Read';
    createButton.setAttribute('class', 'delete-book');
    createDiv.setAttribute('data-index-num', myLibrary.length - 1);

    bookDisplay.appendChild(createDiv);
    createDiv.appendChild(createTitleP);
    createDiv.appendChild(createAuthorP);
    createDiv.appendChild(createGenreP);
    createDiv.appendChild(createPagesP);
    createDiv.appendChild(createDateP);
    createDiv.appendChild(createReadP);

    let getBookTitle = myLibrary.map(e => e.title);
    let getBookAuthor = myLibrary.map(e => e.author);
    let getBookGenre = myLibrary.map(e => e.genre);
    let getBookPages = myLibrary.map(e => e.pages);
    let getBookRelease = myLibrary.map(e => e.date);
    let getBookRead = myLibrary.map(e => e.read);

    for(let i = 0; i < myLibrary.length; i++){
        createTitleP.textContent = `Title: \xa0 ${getBookTitle[i]}`;
        createAuthorP.textContent = `Author: \xa0 ${getBookAuthor[i]}`;
        createGenreP.textContent = `Genre: \xa0 ${getBookGenre[i]}`;
        createPagesP.textContent = `Pages:\xa0 ${getBookPages[i]}`;
        createDateP.textContent = `Date Released:\xa0 ${getBookRelease[i]}`;
        createReadP.textContent = `Have you read it yet: ${getBookRead[i]}`;
    }

    createDiv.appendChild(createButton).addEventListener('click', () => {

        let parent = createDiv.parentNode;

        parent.removeChild(createDiv);

        let indexPos = createDiv.getAttribute('data-index-num');

        delete myLibrary[indexPos]; //this is temporary since this website cannot save any of the information yet.

    });

    createDiv.appendChild(createChangeRead).addEventListener('click', () => {

        newBook.toggleRead;

        if(createReadP.textContent == `Have you read it yet: Yes`){
            createReadP.textContent = `Have you read it yet: No`;
        }else if(createReadP.textContent == `Have you read it yet: No`){
            createReadP.textContent = `Have you read it yet: Yes`;
        }

    });  

}  

Book.prototype.toggleRead = function(){
    if(this.read == 'Yes'){
        this.read = 'No';
    }else if(this.read == 'No'){
        this.read = 'Yes';
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

closeDialogTwo.addEventListener('click', () => {
    dialogTwo.close();
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

