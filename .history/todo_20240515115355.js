// const form = document.querySelector('form');
const inputBox = document.getElementById('input__box')
const todoList = document.querySelector('list')
const addButton = document.getElementById('add')

let todoList = []

addButton.addEventListener('click', function()
{
    let newTodo = {
        todo : inputBox.value,
        check : false,
        important : false
    };

    todoList.push(newTodo)
});



todoList.addEventListener('cl')
