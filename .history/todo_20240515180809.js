// const form = document.querySelector('form');
const inputBox = document.getElementById('input__box')
const addButton = document.getElementById('add')
const list = document.querySelector('list')
const listItem = document.createElement('li')

let todoList = [];

const name1 = (event) => {
    event.preventDefault();
    let newTodo = {
        description : inputBox.value,
    };
    todoList.push(newTodo);
    displayList();
};

function displayList(){
    console.log(todoList)
        todoList.forEach((item, i) => {
            list.innerHTML += `<li>
        <input type='checkbox' id='item_${i}'>
        <label for='item_${i}'>${item.todo}</label>
        </li>`;
        // todo.innerHTML = displayList;
    });

           
    
};


addButton.addEventListener('click', name1);





