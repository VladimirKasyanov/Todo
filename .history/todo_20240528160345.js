const form = document.querySelector("form");
const inputBox = document.querySelector(".input__box");
const addButton = document.querySelector(".add");
const list = document.querySelector(".list");
const label = document.querySelector('.label')
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
            <input type='checkbox' id='${i}' ${
      item.checked ? "checked" : ""
    } onclick='toggleTodo(${i})'>
            <label class='label' for='${i}'>${item.description}</label>
            <button  type='delete' class='del' id='${item.id}' >x</button>
        </li>
    `;
  });
};
//change checked
const toggleTodo = (index) => {
  if (target.checkbox){

    todoList[index].checked = !todoList[index].checked;
  };
  displayList(todoList);
  return;
};
// checked all
const checkAll = () => {
  todoList.forEach((todo) => {
    todo.checked = true;
  });
  displayList(todoList);
};
//remove checked
const removeCheck = () => {
  todoList = todoList.filter((todo) => !todo.checked);
  displayList(todoList);
};

//delete once
function removeOnce(event){
  const todoId = Number(event.target.parentElement.id)
    if(event.target.classList.contains('del')){
      
      todoList = todoList.filter((todo) => todo.id !== todoId);
      displayList(todoList)
    }
  };
  
function changeDescription(event){
  const todoId = Number(event.target.parentElement.id)
  const todoIndex = todoList.findIndex((todo) => todo.id === todoId )
  const label = document.querySelector('.label')
  if (event.target.tagName === '${item.description}') {
       
      
  }
  console.log("asd")

};
  //   if (label.dblclick)  ${item.description}

  // };

list.addEventListener("dblclick", changeDescription);
list.addEventListener("click", removeOnce);
addButton.addEventListener("click", task);

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
