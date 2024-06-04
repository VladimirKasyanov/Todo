const form = document.querySelector('form');
const todoInput = document.querySelector('todo__input');
const todoList = document.querySelector('todo__list');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    const todoList = todoInput.value;

    todoList.insertAdjacentHTML('beforeend');





})




