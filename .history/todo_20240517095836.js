// const form = document.querySelector('form');
const inputBox = document.querySelector('.input__box')
const addButton = document.querySelector('.add')
const list = document.querySelector('.list')
const listItem = document.createElement('li')
const newButton = document.createElement('button')
const but = document.querySelector('.butt')


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
            <label for='item_${i}'>${item.description}
            
            <button id='${item.id}'>
            </button>
            </label>      
        </li>`;
        // todo.innerHTML = displayList;
           });
           

           
    // надо через функции
};




const removeAllTask = (event) => {
    onclick.newButton(event)  
    todoList.length[0]
};
    // removeButton = document.getElementById('#delete');
        // event.target.removeButton;
            // let indexDelete = todoList.findIndex((element)=>element.id === event.target.id)
    //         todoList.splice(index, 1);
    // console.log(indexDelete)
    // todoList.remove()
    // todoList.splice()
    
// };

const removeTask = (event) => {
    onclick.newButton(event);
    
    todoList.splice(i, 1)
};


const checkAll = () => {

}

// const allTask = (counter) => {
    // counter = 0;
    // if (todoList.length <= 0);
//         counter += 1;
//         createElement('button');
// }

addButton.addEventListener('click', name1);

// newButton.addEventListener('click', removeTask)

// function todoList (index) {
//     todoList.splice(index, 1);
//     todoList();

// };





