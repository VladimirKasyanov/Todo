const form = document.querySelector("form");
const inputBox = document.querySelector(".input__box");
const addButton = document.querySelector(".add");
const list = document.querySelector(".list");
const delete = document.querySelector(".del")
let todoList = [];

const name1 = (event) => {
  event.preventDefault();
  let newTodo = {
    description: inputBox.value,
    checked: false,
    id: Date.now(),
  };
  todoList.push(newTodo);
  displayList(todoList);
  inputBox.value = "";
};

const displayList = (arr) => {
  list.innerHTML = "";
  arr.forEach((item, i) => {
    list.innerHTML += `
        <li>
            <input type='checkbox' id='${i}' ${
      item.checked ? "checked" : ""
    } onclick='toggleTodoState(${i})'>
            <label for='${i}'>${item.description}</label>
            <button class='del' id='${item.id}' type='remove'>x</button>
        </li>
    `;
  });
};

const toggleTodoState = (index) => {
  todoList[index].checked = !todoList[index].checked;
  displayList(todoList);
};

const checkAll = () => {
  todoList.forEach((todo) => {
    todo.checked = true;
  });
  displayList(todoList);
};

const removeAll = () => {
  todoList = todoList.filter((todo) => !todo.checked);
  displayList(todoList);
};

const removeOnce = (event) => {
    let indexDelete = todoList.findIndex((element)=>element.id === event.target.id)
    todoList.splice(index, 1);
    displayList(todoList);
}   

addButton.addEventListener("click", name1);
checkAllButton.addEventListener("click", checkAll);
removeComplete.addEventListener("click", removeAll);