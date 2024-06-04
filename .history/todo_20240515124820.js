// const form = document.querySelector('form');
const inputBox = document.getElementById('input__box')
const addButton = document.getElementById('add')
const list = document.querySelector('list')

let todoList = [];

addButton.addEventListener('click', function(event){
    event.preventDefault();
    let newTodo = {
        todo : inputBox.value,
        check : false,
        important : false
    };

    todoList.push(newTodo)

});
    



