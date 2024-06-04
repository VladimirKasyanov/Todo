// const form = document.querySelector('form');
const inputBox = document.querySelector('.input__box')
const addButton = document.querySelector('.add')
const list = document.querySelector('.list')
const listItem = document.createElement('li')
const newButton = document.createElement('button')


let todoList = [];

const name1 = (event) => {
    event.preventDefault();
    let newTodo = {
        description : inputBox.value,
        checked : false,
        id : Date.now()
    };
    todoList.push(newTodo);
    console.log(todoList);
    displayList(todoList);
    // removeTask(todoList);
    // allTask(todoList)
};

const displayList = (arr) => {
    list.innerHTML = '';
        arr.forEach((item, i) => {
            list.innerHTML += 
        `<li>
            <input type='checkbox' id='item_${i}'${item.checked ? 'checked' : ''}>
            <label for='item_${i}'>${item.description} </label>      
                <button id='${item.id}'>
                </button>
        </li>`;
        // todo.innerHTML = displayList;
           });
           

           
    // надо через функции
};




const removeTask = (event) => {
    // removeButton = document.getElementById('#delete');
        // event.target.removeButton;
            // let indexDelete = todoList.findIndex((element)=>element.id === event.target.id)
            todoList.splice(index, 1);
    console.log(indexDelete)
    // todoList.remove()
    // todoList.splice()
    
};


const checkAll = () => {

}

// const allTask = (counter) => {
    // if (todoList.length >= 0);
//         counter += 1;
//         createElement('button');
// }

addButton.addEventListener('click', name1);
// newButton.addEventListener('click', removeTask)

function todoList (index) {
    todoList.splice(index, 1);
    todoList();

};





