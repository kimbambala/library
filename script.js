const button = document.querySelector(".btn");
const display = document.querySelector(".display");
const form = document.querySelector('form');
const main = document.querySelector('.main');




let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(event) {
    event.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');
    
    //const book = new Book(title, author, pages, read);

    const newBook = {
        title: title.value,
        author: author.value,
        pages: pages.value,
        read: read.value

    }

    myLibrary.push(newBook);
    displayBooks(newBook)
    form.reset();
     
}

function displayBooks(book) {
    /*for (let i = 0; i < myLibrary.length; i++) {
        const newBook = myLibrary[i];
        display.innerText = newBook.title + ' by ' + newBook.author + ', ' + newBook.pages + ' pages';
    }
    */

    /*display.querySelector('h4').innerText = book.title;
    display.querySelector('h5').innerText = book.author;
    display.querySelector('h5').innerText = book.pages;
    */

    myLibrary.forEach((newBook) =>{
        displayBook(newBook)
    });

   
  
}

function displayBook(newBook) {
    const container = document.createElement('div')
    container.setAttribute('class', 'newBook')

    const bookTitle = document.createElement('h2');
    bookTitle.innerText = newBook.title;
    container.appendChild(bookTitle);
    
    const bookAuthor = document.createElement('h3')
    bookAuthor.innerText = newBook.author;  
    container.appendChild(bookAuthor);

    const bookPages = document.createElement('h4');
    bookPages.innerText = newBook.pages + " pages";
    container.appendChild(bookPages)


    display.appendChild(container);
    
}


button.addEventListener('click', displayBook(newBook) );
    


/*button.addEventListener('click', Book());

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
    this.info = function(){
        display.innerHTML = `${title} by ${author}, ${pages} pages, ${read}`;
  
    }
  }

  function addBookToLibrary() {
    
  }
  
  const theHobbits = new Book (title.value, author.value, pages.value, 'not read yet')
  theHobbits.info();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
});

form.addEventListener("submit", addBook)
    

function addBook(event) {
    event.preventDefault();
    const title = form.elements["title"].value;
    const author = form.elements["author"].value;
    const pages = form.elements["pages"].value;
    const read = form.elements["read"].checked;
  
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    addElements(book);
    updateStats();
  
    // clear the form
    form.reset();
  }
  */
