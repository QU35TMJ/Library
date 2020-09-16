
///selectors
const displayButton = document.querySelector(".displaybtn");
const cancelButton = document.querySelector(".removebtn")
const addButton = document.querySelector(".addbtn");
const form = document.querySelector(".form");
const library = document.querySelector(".library-container");

//Eventlisteners
displayButton.addEventListener('click', addBookToLibrary);
library.addEventListener('click', deleteCheck);
/*


cancelButton.addEventListener('click', cancelForm);
addButton.addEventListener('click',addBookToLibrary);


display Form
function displayForm() {
  form.style.display = 'block';
}

//delete Form
function cancelForm(){
    form.style.display = 'none';  
}
*/
 // the constructor...
function Book(title, author, pages, status) { 
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

let myLibrary = [];
let book1 = new Book("The Lord of the Rings: The Fellowship of the Ring", "J. R. R. Tolkien", 9250, "Not read");
let book2 = new Book("Harry Potter", "J. K. Rowling", 500, "read");

myLibrary.push(book1);
myLibrary.push(book2);
showBook();



function addBookToLibrary() {
  let title = prompt("Introduce the name of the book:");
  let author = prompt("Introduce the name of the author:");
  let pages = +prompt("Introduce the number of the pages:");
  if (title.length > 1 && author.length > 1 && pages > 1) {
      myLibrary.push(new Book(title, author, pages, status));
      showBook();
  } else {
      alert("This book isn't valid")
  }
}

function showBook(){
  library.innerHTML = '';
  myLibrary.forEach(book => displayBook(book));
}
//show book
function displayBook(book){
  // e.preventDefault();
 //create display div
 const bookDiv = document.createElement('div');
 bookDiv.classList.add =('book-item');
 
 const newTitle = document.createElement('h3');
 const newAuthor = document.createElement('h4');
 const newPages = document.createElement('h5');
 const newStatus = document.createElement('h4');

 let title = document.getElementById('title');
 let author = document.getElementById('author');
 let pages = document.getElementById('pages');
 let status = document.getElementById('status');
 
 newTitle.textContent = book.title;
 newAuthor.textContent = 'By: ' + book.author;
 newPages.textContent = book.pages + ' pages';
 newStatus.textContent = book.status;
 
 bookDiv.appendChild(newTitle);
 bookDiv.appendChild(newAuthor);
 bookDiv.appendChild(newPages);
 bookDiv.appendChild(newStatus);
 
 // give each book a data attribute representing the index to help with removal of bookDivs
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

 function deleteCheck(e){
  const item = e.target;
  // delete To do
  if(item.classList[0] === "delete-book"){
      const lib = item.parentElement;
      lib.remove();
      /*animation
      lib.classList.add("fall");
      //special eventListener to wait for transformaion to end before deleting
      lib.addEventListener("transitionend", function(){
          lib.remove();
      });*/
      
  }
  // check
  if(item.classList[0] === "read-book"){
      const todo = item.parentElement;
      todo.classList.toggle("read");
  } 

}

  /*
 
 function addBook(e){
  e.preventDefault();
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');
  let status = document.getElementById('status');

  let newBook = document.createElement('div');
  newBook.classList.add('new-book');

  let btitle = document.createElement('h3');
  btitle.textContent = title.value;
  let bauthor = document.createElement('h3');
  let by = document.createElement('p');
  by.textContent = 'By: ';
  bauthor.textContent = author.value;
  let bpages = document.createElement('h3');
  bpages.textContent = pages.value;
  let bstatus = document.createElement('h3');
  bstatus.textContent = status.value;

  newBook.appendChild(btitle);
  newBook.appendChild(by);
  newBook.appendChild(bauthor);
  newBook.appendChild(bpages);
  newBook.appendChild(bstatus);
  library.appendChild(newBook);
 }
 
*/