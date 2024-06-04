// const form = document.querySelector('form');
const inputBox = document.querySelector('input__box')
const addButton = document.querySelector('add')
const list = document.querySelector('list')
const listItem = document.createElement('li')

let todoList = [];

const name1 = (event) => {
    event.preventDefault();
    let newTodo = {
        description : inputBox.value,
    };
    todoList.push(newTodo);
    console.log(todoList);
    // displayList();
};

function displayList(){
    console.log(todoList)
        todoList.forEach((item, i) => {
            list.innerHTML += `<li>
        <input type='checkbox' id='item_${i}'>
        <label for='item_${i}'>${item.description}</label>
        </li>`;
        // todo.innerHTML = displayList;
    });

           
    
};


addButton.addEventListener('click', name1);





