const bookDisplay = document.querySelector('.card-container');

const myLibrary = ['book1', 'book2', 'book3', 'book4', 'book5'];

function book(title, author, pages, read, info){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
//     this.info = function(){
//         return ` Book Info
// Title: ${this.title} 
// Author: ${this.author}
// Pages: ${this.pages}
// Read: ${this.read}`
//     };
}

function addBookToLibrary(){
    let createDiv;

    for(let i = 0; i < myLibrary.length; i++){
        createDiv = document.createElement('div');
        createDiv.setAttribute('class', 'cards');
        bookDisplay.appendChild(createDiv);
        createDiv.textContent = myLibrary[i];
    }
}

addBookToLibrary();