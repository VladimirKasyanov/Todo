const form = document.querySelector("form");
const inputBox = document.querySelector(".input__box");
const addButton = document.querySelector(".add");
const list = document.querySelector(".list");
const label = document.querySelector(".label");
const newInput = document.querySelector(".new-input")
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
<input class = 'check' type='checkBox' id='${item.id}' ${
      item.checked ? "checked" : ""
    }>  
<span class='text' for='${i}'>${item.description}</span>
<input class='new-input' type = 'hidden' ></input>
<button type='delete' class='del' id='${item.id}' >x</button>
</li>
`;
  });
};
// onclick='toggleTodo(${i})'
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
  // const todoId = Number (event.target.parentElement.id);
  // const todo = todoList.find((todo) => todo.id == todoId);

  if (event.target.classList.contains("text")) {
    // const input = document.createElement("input");
    const {children} = event.target.parentNode
    event.children[1].hidden = true 
    event.children[2].hidden = false 
    event.children[2].focus()

    // label.appendChild("input");
    // input.type = 'text';
    // input.value = todo.description;
    
    // input


    // blur.addEventListener
  }
  // console.log("132")
  // event.target.replaceWith('input')
};

const changeDescriptionFinish = (event) => {
  if (event.target.classList.contains("new-input")) {
    event.children[2] = true
    event.target.replaceWith('${item.description}')  

    event.keyCode === 13
    if (event.keyCode === 27)
    input.addEventListener('blur', () => {
    todo.description = input.value;


    }) 
    }
  }
 // newInput.addEventListener("blur",changeDescriptionFinish)
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
