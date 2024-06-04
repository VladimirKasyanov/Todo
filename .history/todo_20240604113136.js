// const form = document.querySelector("form");
const inputBox = document.querySelector(".input__box");
const addButton = document.querySelector(".add");
const list = document.querySelector(".list");
const label = document.querySelector(".span");
const newInput = document.querySelector(".new-input");
const totalCounter = document.querySelector("#all");
const completedCounter = document.querySelector("#completed");
const incompleteCounter = document.querySelector("#active");
const allButton = document.querySelector(".all-button");
const pagesPagination = document.querySelector(".pages")
const pagesButton = document.querySelector(".createPage")

const keyEnter = "Enter"
const keyEscape = "Escape"
const itemPerPage = 5;

let todoList = [];
let condition = "all"
let page = 1;
let countPage = 1;
let lastPage = 1;

const task = (event) => {
  event.preventDefault();
  const inputText = inputBox.value.trim()
  if (inputText === "" || inputText === null) return;
  let newTodo = {
    description: inputBox.value,
    checked: false,
    id: Date.now(),
  };
  todoList.push(newTodo);
  condition = "all"
  page = (Math.ceil(filterTodo().length / itemPerPage))
  inputBox.value = "";

  displayList();
  thisPage(page);
};



const displayList = () => {
  
  thisPage(page);
  const sorteredArray = filterTodo()
  .slice((page - 1) * itemPerPage, page * itemPerPage);
  let htmllist = "";
  sorteredArray.forEach((item) => {
    htmllist += `
    <li id ='${item.id}'> 
    <input class = 'check' type='checkBox' id='${item.id}' ${
      item.checked ? "checked" : ""
    }>  
    <span class='some-text'>${item.description}</span>
    <input class='new-input' type= 'text' value='${item.description.replace(/\s+/g, '')}' hidden></input>
    <button type='delete' class='del' id='${item.id}' >x</button>
    </li>
    `;    
  });
  list.innerHTML = htmllist;

pagination();
updateCounters();
};

const toggleTodo = (event) => {
  if(event.target.type == 'checkbox') {
    const todoId = event.target.id;
    todoList.forEach((item) => {
      if (item.id === Number(todoId)) {
        item.checked = !item.checked;
      }
    })
  }
   updateCounters();
   displayList();
};

const checkAll = () => {
  todoList.forEach((todo) => {
    todo.checked = !todo.checked;
  });
  displayList();
};

const updateCounters = () => {
  const completedCount = todoList.filter((item) => item.checked).length;
  const incompleteCount = todoList.length - completedCount;

  completedCounter.innerText ='complete ' + completedCount;
  incompleteCounter.innerText = 'active ' + incompleteCount;
  totalCounter.innerText = 'all ' + todoList.length;
}

 const pagination = () => {
   let pages ="";
   const count = filterTodo().length
   countPage = Math.ceil(count / itemPerPage);
   lastPage = countPage;

   for  (let i = 0; i < countPage; i+=1){
   pages += `
    <button class ='createPage ${i + 1 === page ? 'active' : '' }'
    id = '${i+1}'
    >
    ${i+1}
    </button>`;
  }
  pagesPagination.innerHTML = pages;
 }

 function thisPage (newPage){
  if(newPage != lastPage){
    page = newPage  
  }else{
    page = Math.ceil(filterTodo().length / itemPerPage);
  }
 }

 const NextPage = (event) => {
  if (event.target.classList.contains(".pages")) {
    page = Number(event.target.id)
    thisPage(page);
 }
 displayList();
 }



function filterTodo () {
  switch(condition) {
     case 'active':
      console.log("123456")
        return todoList.filter((item) => !item.checked);
       case 'completed':
        return todoList.filter((item) => item.checked);
      default:
        return todoList
    };
    
    
};

function swapFocus () {
  let appendChild = allButton.children;
  appendChild[0].classList.remove('active');
  appendChild[1].classList.remove('active');
  appendChild[2].classList.remove('active');
}

// const chooseCategories = (event) => {

//   switch(event.target.id) {
//     case 'active':
//       condition = 'active'
//       displayList();
//       break
    
//     case 'completed':
//       condition = 'completed'
//       displayList();
//       break

//     default:
//       condition = 'all'
//       displayList();
//       break

//     };
// }

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


const editNew = (elementId) => { 
  const theElement = document.getElementById(elementId)
  const newText = theElement.children[2].value;
    if (newText === "" || newText === null) return
  
  
  todoList.forEach((item) => {
    if (item.id === Number(elementId)) {
        item.description = newText.trim()
    }
  
  })
  displayList(todoList);
  updateCounters();
  


}

const addButtonEnter = (event) => {
    if (event.key === keyEnter) {
       task(event);
  }
};

const changeDescription = (event) => {
  if (event.target.classList.contains("some-text")) {
    const {children} = event.target.parentNode
    children[1].hidden = true 
    children[2].hidden = false
    children[2].focus()
  }
};

const changeDescriptionFinish = (event) => {
    if (event.target.classList.contains("new-input")) {
      if (event.key === keyEnter){
        const todoId = Number(event.target.parentElement.id);
        editNew(todoId);
      }
      if (event.key === keyEscape) {
        displayList()
      }
    }
  }

  list.addEventListener("dblclick", changeDescription);
  list.addEventListener("click", removeOnce);
  list.addEventListener("click", toggleTodo);
  addButton.addEventListener("click", task);
  list.addEventListener('keyup', changeDescriptionFinish);
  inputBox.addEventListener('keydown', addButtonEnter);
  totalCounter.addEventListener('click', filterTodo);
  completedCounter.addEventListener('click', filterTodo);
  incompleteCounter.addEventListener('click', filterTodo);



  

