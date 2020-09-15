
///selectors
const displayButton = document.querySelector(".displaybtn");
const cancelButton = document.querySelector(".removebtn")
const addBook = document.querySelector(".addbtn");
const form = document.querySelector(".form");
const library = document.querySelector(".library-container");



//Eventlisteners
displayButton.addEventListener('click', displayForm);
cancelButton.addEventListener('click', cancelForm);
addBook.addEventListener('click',addBookToLibrary);


//display Form
function displayForm() {
  form.style.display = 'block';
}

//delete Form
function cancelForm(){
    form.style.display = 'none';  
}

 // the constructor...
function Book(title, author, pages, status) { 
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

let myLibrary = [];
let book1 = new Book("The Lord of the Rings: The Fellowship of the Ring", "J. R. R. Tolkien", 9250, "Not read");
let book2 = new Book();

myLibrary.push(book1);
myLibrary.push(book2);
showBook();



function addBookToLibrary(title, author, pages, status) {
  
  const book = new Book(title, author, pages, "Not-read");
  myLibrary.push(book);
  showBook(); 
}

function showBook(){
  library.innerHTML = '';
  myLibrary.forEach(displayBook);
}
//show book
function displayBook(){
 //e.preventDefault();
 //create display div
 const bookDiv = document.createElement('div');
 bookDiv.classList.add =('book-item');
 
 let title = document.getElementById('title');
 let author = document.getElementById('author');
 let pages = document.getElementById('pages');
 let status = document.getElementById('status');
 
 const newTitle = document.createElement('h3');
 newTitle.innerText = 'hey';
 const newAuthor = document.createElement('h4');
 const newPages = document.createElement('h5');
 const newRead = document.createElement('h4');
 
 newTitle.textContent = title.value;
 newAuthor.textContent = 'By:' + author.value;
 newPages.textContent = pages.value + 'pages';
 newRead.textContent = status.value;
 
 bookDiv.appendChild(newTitle);
 bookDiv.appendChild(newAuthor);
 bookDiv.appendChild(newPages);
 bookDiv.appendChild(newRead);
 
 // give each book a data attribute representing the index to help with removal of cards
 //bookDiv.setAttribute('data-index', i);
 
 // create delete button
 const deleteButton = document.createElement('button');
 deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
 deleteButton.classList.add('delete-book');
 bookDiv.appendChild(deleteButton);
 
 // create button representing read status
 const readButton = document.createElement('button');
 readButton.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
 readButton.classList.add('read-book');
 bookDiv.appendChild(readButton);
 
 
 library.appendChild(bookDiv);
 
 }
  

