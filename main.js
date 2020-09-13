//selectors
const displayButton = document.querySelector(".displaybtn");
const cancelButton = document.querySelector(".removebtn")
const addBook = document.querySelector(".addbtn");
const form = document.querySelector(".form");
const library = document.querySelector(".library-container");


//Eventlisteners
displayButton.addEventListener('click', displayForm);
cancelButton.addEventListener('click', cancelForm);
addBook.addEventListener('click',addBookToLibrary);

//Functions

let myLibrary = [];

 // the constructor...
function Book(title, author, pages) { 
  this.title = title
  this.author = author
  this.pages = pages
}

//display Form
function displayForm() {
  form.style.display = 'block';
}

//delete Form
function cancelForm(){
    form.remove();  
}

//Add books
function addBookToLibrary() {
 
  //create table
  //create read button
  //create delete button
 

  
}
