// const form = document.querySelector('form');
const inputBox = document.getElementById('input__box')
const addButton = document.getElementById('add')
const list = document.querySelector('list')

let todoList = [];

addButton.addEventListener('click', function(event){
    event.preventDefault();
    let newTodo = {
        todo : inputBox.value,
    };
       todoList.push(newTodo)
       displayMessage() 
});

function displayMessage() {

    todoList.forEach(function(item, i){
    let displayMessage = `
    <li>
     </li>
    `

});
}





