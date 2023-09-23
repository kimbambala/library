const button = document.querySelector(".btn");
const display = document.querySelector(".display");
const form = document.querySelector("form");
const main = document.querySelector(".main");
const container = document.querySelector(".container");


let myLibrary = [
  {
    title: "The Hobbit",
    author: "JRR Tolkien",
    pages: 5000,
    read: "Not read",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 6000,
    read: "Not read",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 3000,
    read: "Not read",
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function displayBooks() {
  myLibrary.forEach((book) => {
    displayBook(book);
  });

  
}


function displayBook(book) {
  const mainDisplay = document.querySelector(".main-display");
  const templ = document
    .getElementById("display-template")
    .content.cloneNode(true);

  templ.querySelector("h2").innerText = book.title;
  templ.querySelector("h3").innerText = book.author;
  templ.querySelector("h4").innerText = book.pages + " pages";
  templ.querySelector("h5").innerText = book.read;


  mainDisplay.appendChild(templ);

  const removeBtn = document.querySelector(".delete-button");
  removeBtn.addEventListener("click", removeBook);
 

}

document.addEventListener("DOMContentLoaded", () => {
  displayBooks();





  button.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
  });
});



function addBookToLibrary() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");

  const newBook = {
    title: title.value,
    author: author.value,
    pages: pages.value,
    read: read.cheked,
  };

  myLibrary.push(newBook);
  displayBook(newBook);
  form.reset();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks()
}








