// const form = document.querySelector('form');
const inputBox = document.getElementById('input__box')
const todoList = document.getElementById('todo__list')

function addTask(){ 
    li = document.createElement("li")
    li.innerHTML = inputBox.value
    todoList.appendChild(li)
}


