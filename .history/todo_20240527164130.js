const form = document.querySelector("form");
const inputBox = document.querySelector(".input__box");
const addButton = document.querySelector(".add");
const list = document.querySelector(".list");
const delButtons = document.querySelectorAll(".del")
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
        <li id ='${item.id}'> 
            <input type='checkbox' id='${i}' ${
      item.checked ? "checked" : ""
    } onclick='toggleTodo(${i})'>
            <label for='${i}'>${item.description}</label>
            <button  class='del' id='${item.id}' type='delete' >x</button>
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
    todo.checked = true;
  });
  displayList(todoList);
};

const removeAll = () => {
  todoList = todoList.filter((todo) => !todo.checked);
  displayList(todoList);
};


const removeOnce = (event) => {
    // const delButtons = document.querySelectorAll(".del")
    let delButtons = todoList.findIndex((item) => item.id === event.target.id);
    if (index !== -1) {


        todoList.splice(index, 1);
        displayList(todoList);
      }
    
        delButtons.addEventListener("click", removeOnce);
    };   

    
addButton.addEventListener("click", name1);
// let itemId = event.target.id
// let index = todoList.findIndex((element) => element.id === itemId);  
// delOnce.addEventListener("click", delOnce)
// for.forEach
// const removeOnce = (event) => {
//     delOnce.addEventListener("click", removeOnce);
//         let delOnce = todoList.findIndex((element) => element.id === event.target.id);
//             if (index !== -1) {
//                 todoList.splice(index, 1);

//             };
//             displayList(todoList);
//         };   
    

          
          
        
          // todoList = todoList.filter((todo) => );
    // todoList.removeChild("li");
// checkAllButton.addEventListener("click", checkAll);
// removeComplete.addEventListener("click", removeAll);
// replace(/\s+/g, '') // space delete


