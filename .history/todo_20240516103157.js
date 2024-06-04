// const form = document.querySelector('form');
const inputBox = document.querySelector('.input__box')
const addButton = document.querySelector('.add')
const list = document.querySelector('.list')
const listItem = document.createElement('li')

let todoList = [];

const name1 = (event) => {
    event.preventDefault();
    let newTodo = {
        description : inputBox.value,
    };
    todoList.push(newTodo);
    console.log(todoList);
    displayList(todoList);
};

const displayList = (arr) => {
    list.innerHTML = '';
        arr.forEach((item, i) => {
            list.innerHTML += 
        `<li>
        <input type='checkbox' id='item_${i}'>
        <label for='item_${i}'>${item.description}</label>
        </li>`;
        // todo.innerHTML = displayList;
    });

           
    
};

const checkAll = () => {

}

const allTask = (counter) => {
    if (todoList >= 0);
        counter += 1
        createElement('button')
}

addButton.addEventListener('click', name1);





