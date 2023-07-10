import Books from './modules/bookManager.js';
import * as dateTime from './modules/time.js';

const localDateTime = document.querySelector('.dateTime');
localDateTime.innerHTML = `${dateTime.localDate} ${dateTime.hour}:${dateTime.min}`;

const book = new Books();

book.updateItems();
book.selectItems();

const bookList = document.querySelector('.nav-menu');
const booksLists = document.querySelector('#add-book-form');
const getInTouch = document.querySelector('.contacts');
const seeBooks = document.querySelector('#books-list');

bookList.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'Books List') {
    book.selectItems();
    booksLists.style.display = 'none';
    getInTouch.style.display = 'none';
    seeBooks.style.display = 'block';
  }
  if (e.target.innerHTML === 'Add New') {
    booksLists.style.display = 'block';
    getInTouch.style.display = 'none';
    seeBooks.style.display = 'none';
  }
  if (e.target.innerHTML === 'Contact Info') {
    booksLists.style.display = 'none';
    getInTouch.style.display = 'block';
    seeBooks.style.display = 'none';
  }
});