const form = document.querySelector('#form');
const todoInput = document.querySelector('#todo__input');
const todoList = document.querySelector('#todo__full');
const button = document.querySelector('#add__butt')

form.addEventListener('submit', function (event) {

    event.preventDefault();

    const todoText = todoInput.value;

    todoList.insertAdjacentHTML('beforeend');





})




