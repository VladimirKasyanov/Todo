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
    };
    todoList.push(newTodo);
    console.log(todoList);
    displayList(todoList);
    removeTask(todoList);
    newID(newTodo)
};

const displayList = (arr) => {
    list.innerHTML = '';
        arr.forEach((item, i) => {
            list.innerHTML += 
        `<li>
        <input type='checkbox' id='item_${i}'>
        <label for='item_${i}'>${item.description} </label>      
        <button class = 'delete'>
        </button>
        </li>`;
        // todo.innerHTML = displayList;
           });

           
    
};

const newID = () => {
    todoList = Date.now([])
    


}




const removeTask = () => {
    document.querySelector('.delete')
        

}


const checkAll = () => {

}

const allTask = (counter) => {
    if (todoList >= 0);
        counter += 1
        createElement('button')
}

addButton.addEventListener('click', name1);





