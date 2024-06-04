const form = document.querySelector("form");
const inputBox = document.querySelector(".input__box");
const addButton = document.querySelector(".add");
const list = document.querySelector(".list");
const delOnce = document.querySelectorAll(".del")
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
            <label id ='${item.id}'for='${i}'>${item.description}</label>
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
    const itemId = event.target.id
    todoList.findIndex((element) => element.id === itemId);  
    // delOnce.addEventListener("click", delOnce)
    // let removeDel = todoList.findIndex((element) => element.id === event.target.id)
    todoList.splice(index, 1);

    // todoList = todoList.filter((todo) => );
    // todoList.removeChild("li");
    delOnce.addEventListener("click", removeDel)
    displayList(todoList);
    
};   

addButton.addEventListener("click", name1);
// checkAllButton.addEventListener("click", checkAll);
// removeComplete.addEventListener("click", removeAll);
// let delOnce = todoList.findIndex((element) => element.id === event.target.id)
