// const form = document.querySelector('form');
const inputBox = document.getElementById('input__box')
const addButton = document.getElementById('add')
const list = document.querySelector('list')
const listItem = document.createElement('li')

let todoList = [];

addButton.addEventListener('click', function(event){
    event.preventDefault();
    let newTodo = {
        todo : inputBox.value,
    };
       todoList.push(newTodo);
       displayList();
});

function displayList() {
    array.forEach(element => {
        displayList =
        listItem.textContent = `<li>${newTodo}
       
       </li> `

    
   });
};




