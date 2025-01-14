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
const deleteBook = document.querySelector('.delete-book');

const myLibrary = [];

function book(title, author, genre, pages, date, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.date = date;
    this.read = read;
}

function addBookToLibrary(bookTitle, bookAuthor, bookGenre, bookPages, bookDate, bookRead){

    const newBook = new book(bookTitle, bookAuthor, bookGenre, bookPages, bookDate, bookRead);

    console.log(newBook);
    myLibrary.push(newBook);

    console.log(myLibrary);
    displayBook();

}

let divCounter = 0;

function displayBook(){
    let createDiv = document.createElement('div');
    let createButton = document.createElement('button');
    let createTitleP = document.createElement('p');
    let createAuthorP = document.createElement('p');
    let createGenreP = document.createElement('p');
    let createPagesP = document.createElement('p');
    let createDateP = document.createElement('p');
    let createReadP = document.createElement('p');

    createButton.textContent = 'Remove Book';
    createButton.setAttribute('class', 'delete-book');

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
        createTitleP.textContent = `Title: ${getBookTitle[i]}`
        createAuthorP.textContent = `Author: ${getBookAuthor[i]}`
        createGenreP.textContent = `Genre: ${getBookGenre[i]}`
        createPagesP.textContent = `Pages: ${getBookPages[i]}`
        createDateP.textContent = `Date Released: ${getBookRelease[i]}`
        createReadP.textContent = `Have you read it yet: ${getBookRead[i]}`
    }

    createDiv.setAttribute('data-div-num', divCounter++);

    createDiv.appendChild(createButton).addEventListener('click', () => {

        let indexPos = createDiv.dataset.divNum;
        divCounter = Number(indexPos)+1;

        console.log(indexPos);
        let child = bookDisplay.getElementsByTagName('div')[indexPos];

        console.log(child);
        console.log(myLibrary[indexPos]);

        bookDisplay.removeChild(child);

        myLibrary.splice(indexPos, 1);

        console.log(myLibrary);
    });
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

