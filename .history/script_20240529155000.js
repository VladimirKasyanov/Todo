const form = document.querySelector("form");
const inputBox = document.querySelector(".input__box");
const addButton = document.querySelector(".add");
const list = document.querySelector(".list");
const label = document.querySelector(".label");
let todoList = [];

const task = (event) => {
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
<li id ='${item.id}'> 
<input type='checkBox' id='${i}' ${
      item.checked ? "checked" : ""
    } onclick='toggleTodo(${i})'>
<label class='label' for='${i}'>${item.description}</label>
<button type='delete' class='del' id='${item.id}' >x</button>
</li>
`;
  });
};

const toggleTodo = (index) => {
  todoList[index].checked = !todoList[index].checked;
  displayList(todoList);
};

const checkAll = () => {
  todoList.forEach((todo) => {
    todo.checked = !todo.checked;
  });
  displayList(todoList);
};

const removeCheck = () => {
  todoList = todoList.filter((todo) => !todo.checked);
  displayList(todoList);
};

function removeOnce(event) {
  const todoId = Number(event.target.parentElement.id);
  if (event.target.classList.contains("del")) {
    todoList = todoList.filter((todo) => todo.id !== todoId);
    displayList(todoList);
  }
}

const changeDescription = (event) => {
  const todoId = event.target.parentElement.id;
  const todo = todoList.findIndex((todo) => todo.id == todoId);

  if (event.target.classList.contains("label")) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = todo.description;

    input.addEventListener("blur", () => {
      todo.description = input.value;
      displayList(todoList);
    });

    event.target.replaceWith(input);
    input.focus();
  }
};

list.addEventListener("dblclick", changeDescription);
list.addEventListener("click", removeOnce);
addButton.addEventListener("click", task);