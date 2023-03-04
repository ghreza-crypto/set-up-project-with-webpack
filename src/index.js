import './style.css';
import {
  savedData, saveTodo, viewData, removeAllCompleted,
} from './modules/toDoCrud.js';

const form = document.querySelector('#toDoListForm');
const inputForm = document.getElementById('addTodo_input');
const clearAllCompleted = document.getElementById('clearAllCompleted');

viewData();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveTodo(inputForm.value, false, savedData().length + 1);
  viewData();
});

clearAllCompleted.addEventListener('click', removeAllCompleted);