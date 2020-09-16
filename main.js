
///selectors
const displayButton = document.querySelector(".displaybtn");
//const cancelButton = document.querySelector(".removebtn")
const addButton = document.querySelector(".addbtn");
const form = document.querySelector(".form");
const library = document.querySelector(".library-container");

//Eventlisteners
displayButton.addEventListener('click', displayForm);
//cancelButton.addEventListener('click', cancelForm);
addButton.addEventListener('click',addBook);
library.addEventListener('click', deleteCheck);


//display Form
function displayForm() {
if(form.style.display === 'none'){
  form.style.display = 'block';
}else{
  form.style.display = 'none';
};
 
}

/*delete Form
function cancelForm(){
    form.style.display = 'none';  
}*/

 // the constructor...
function Book(title, author, pages, status) { 
  this.title = title
  this.author = author
  this.pages = pages
  //this.status = status
}

let myLibrary = [];
let book1 = new Book("The Lord of the Rings: The Fellowship of the Ring", "J. R. R. Tolkien", 9250);
let book2 = new Book("Harry Potter", "J. K. Rowling", 500);

myLibrary.push(book1);
myLibrary.push(book2);
showBook();


/*
function addBookToLibrary() {
  let title = document.getElementById('titles');
  title.innerText = e.target.elements.booktitle.value;
  let author =document.getElementById('authors');
  author.textContent = authors.value;
  let pages = document.getElementById('pagess');
  pages.textContent = pagess.value;
  let status = document.getElementById('statuss');
  status.textContent = statuss.value;
  if (title.length > 1 ) {
      myLibrary.push(new Book(title, author, pages, status));
      showBook();
  } else {
      alert("This book isn't valid")
  }
}*/

function showBook(){
  library.innerHTML = '';
  myLibrary.forEach(book => displayBook(book));
}
//show book
function displayBook(book){
  // e.preventDefault();
 //create display div
 const bookDiv = document.createElement('div');
 bookDiv.classList.add('book-item');
 
 const newTitle = document.createElement('h4');
 newTitle.classList.add('book-details');
 const newAuthor = document.createElement('h4');
 newAuthor.classList.add('book-details');
 const newPages = document.createElement('h5');
 newPages.classList.add('book-details');
 /*const newStatus = document.createElement('h4');
 newStatus.classList.add('books-details');*/

 let title = document.getElementById('title');
 let author = document.getElementById('author');
 let pages = document.getElementById('pages');
 //let status = document.getElementById('status');
 
 newTitle.textContent = book.title;
 newAuthor.textContent = 'By: ' + book.author;
 newPages.textContent = book.pages + ' pages';
 //newStatus.textContent = book.status;
 
 bookDiv.appendChild(newTitle);
 bookDiv.appendChild(newAuthor);
 bookDiv.appendChild(newPages);
 //bookDiv.appendChild(newStatus);
 
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

 //Add book
 function addBook(e){
  
  e.preventDefault();
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');
 // let status = document.getElementById('status');

  let newBook = document.createElement('div');
  newBook.classList.add('new-book');

  let btitle = document.createElement('h3');
  btitle.classList.add('book-details');
  btitle.textContent = title.value;
  let bauthor = document.createElement('h4');
  bauthor.classList.add('book-details');
  bauthor.textContent = 'By: ' + author.value;
  let bpages = document.createElement('h5');
  bpages.classList.add('book-details');
  bpages.textContent = pages.value + ' pages';
  /*let bstatus = document.createElement('h4');
  bstatus.classList.add('books-details');
  bstatus.textContent = status.value;*/

  newBook.appendChild(btitle);
  newBook.appendChild(bauthor);
  newBook.appendChild(bpages);
  //newBook.appendChild(bstatus);
 

  // create delete button
 const deleteButton = document.createElement('button');
 deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
 deleteButton.classList.add('delete-book');
 newBook.appendChild(deleteButton);

 // create button representing read status
 const readButton = document.createElement('button');
 readButton.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
 readButton.classList.add('read-book');
 newBook.appendChild(readButton); 

 library.appendChild(newBook);
 removeForm();
 
 }
 function removeForm(){
   form.style.display = 'none';
 }

 function deleteCheck(e){
  const item = e.target;
  
  // delete To do
  if(item.classList[0] === "delete-book"){
      const lib = item.parentElement;
      //animation
      lib.classList.add("fall");
      //special eventListener to wait for transformaion to end before deleting
      lib.addEventListener("transitionend", function(){
          lib.remove();
      });
      
  }
  // check
  if(item.classList[0] === "read-book"){
    const lib = item.parentElement;
    lib.classList.toggle("read");    
    
  } 

}
 