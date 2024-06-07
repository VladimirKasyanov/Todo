 (() =>{ 
const checkAllInput = document.querySelector('.check-all');
const inputBox = document.querySelector('.input__box');
const addButton = document.querySelector('.add');
const list = document.querySelector('.list');
// const newInput = document.querySelector('.new-input');
const totalCounter = document.querySelector('#all');
const completedCounter = document.querySelector('#completed');
const incompleteCounter = document.querySelector('#active');
const allButton = document.querySelector('.all-button');
const pagesPagination = document.querySelector('.pages');
// const pagesButton = document.querySelector('.createPage');
// const someText = document.querySelector('.some-text')
const removeChecked = document.querySelector('.remove-check')

const keyEnter = "Enter";
const keyEscape = "Escape";
const itemPerPage = 5;

let todoList = [];
let condition = "all";
let page = 1;
let countPage = 1;
let lastPage = 1;

const task = (event) => {
  event.preventDefault();
  const inputText = inputBox.value.trim().replace(/  +/g, ' ');
  if (inputText === "" || inputText === null ) return;
  const newTodo = {
    description:_.escape(inputBox.value),
    isChecked: false,
    id: Date.now(),
  };
  todoList.push(newTodo);
  condition = "all";
  page = Math.ceil(filterTodo().length / itemPerPage);
  inputBox.value = "";

  displayList();
  thisPage(page);
  pagination();
  updateCounters();
  checkAllCheckbox();

};

function displayList() {
  thisPage(page);
  const sortedArray = filterTodo()
    .slice((page - 1) * itemPerPage, page * itemPerPage);
  let htmlList = "";
  sortedArray.forEach((item) => {
    htmlList += `
      <li id ='${item.id}'>
      <input class='check' type='checkbox' id='${item.id}' ${item.isChecked ? "checked" : ""}>
      <span class='some-text'>${item.description}</span>
      <input id='${item.id}' class='new-input' type='text' value='${item.description}' hidden></input>
      <button type='delete' class='del'>x</button>
      </li>
    `;
  });
  list.innerHTML = htmlList;

  
  pagination();
  updateCounters();
  checkAllCheckbox();
  
};

const toggleTodo = (event) => {
  if (event.target.classList.contains('check')) {
    const todoId = Number(event.target.parentElement.id);
    todoList.forEach((item) => {
      if (item.id === todoId) {
        item.isChecked = !item.isChecked;
      }
    });
    updateCounters();
    checkAllCheckbox();
    displayList();  
  }
};

const addButtonEnter = (event) => {
    if (event.key === keyEnter) {
      task(event);
    }
  };

function checkAll() {
  todoList.forEach((item) => item.isChecked = checkAllInput.checked);
  displayList();
};

function checkAllCheckbox() {
  const allCheck = todoList.length > 0 && todoList.every((item) => item.isChecked);
  checkAllInput.checked = allCheck;
}

function updateCounters() {
  const completedCount = todoList.filter((item) => item.isChecked).length;
  const incompleteCount = todoList.length - completedCount;

  completedCounter.innerText = 'complete ' + completedCount;
  incompleteCounter.innerText = 'active ' + incompleteCount;
  totalCounter.innerText = 'all ' + todoList.length;
}

function pagination() {
  let pages = "";
  const count = filterTodo().length;
  countPage = Math.ceil(count / itemPerPage);
  lastPage = countPage;

  for (let i = 0; i < countPage; i += 1) {
    pages += `
      <button class='createPage ${i + 1 === page ? 'active' : ''}'
      id='${i + 1}'>
      ${i + 1}
      </button>`;
  }
  pagesPagination.innerHTML = pages;
}

function thisPage(newPage) {
  if (newPage !== lastPage) {
    page = newPage;
  } else {
    page = Math.ceil(filterTodo().length / itemPerPage);
  }
}

const NextPage = (event) => {
  if (event.target.classList.contains("createPage")) {
    page = Number(event.target.id);
    thisPage(page);
    displayList();
  };
};

function filterTodo() {
  switch (condition) {
    case 'active':
      return todoList.filter((item) => !item.isChecked);
    case 'completed':
      return todoList.filter((item) => item.isChecked);
    default:
      return todoList;
  };
};

function swapFocus(event) {
  let appendChild = allButton.children;
  appendChild[0].classList.remove('active');
  appendChild[1].classList.remove('active');
  appendChild[2].classList.remove('active');
  if (event.target.classList.contains('btn')) {
    condition = event.target.id;
  }
  displayList();
  switch (condition) {
    case 'active':
      appendChild[1].classList.add('active');
      break;
    case 'completed':
      appendChild[2].classList.add('active');
      break;
    default:
      appendChild[0].classList.add('active');
      break;
  }
  displayList();
}

 const removeCheck = () => {
   todoList = todoList.filter((todo) => !todo.isChecked);
   displayList();
 };

function removeOnce(event) {
  const todoId = Number(event.target.parentElement.id);
  if (event.target.classList.contains("del")) {
    todoList = todoList.filter((todo) => todo.id !== todoId);
    displayList();
  };
};

const editNew = (event) => {
  let newText = event.target.parentNode.children[2].value;
  newText =_.escape(newText.trim().replace(/  +/g, ' '));
  if (event.sourceCapabilities !== null){
    if (newText.trim() === '') {
      displayList();
    }
  }
  const todoId = Number(event.target.parentElement.id);

  todoList.forEach((item) => {
    if (item.id === todoId) {
      item.description = newText;
    }
  });
  updateCounters();
  displayList();
}






const changeDescription = (event) => {
  if (event.target.classList.contains("some-text")) {
    const { children } = event.target.parentNode;
    children[1].hidden = true;
    children[2].hidden = false;
    children[2].focus();
  }
};

const changeDescriptionFinish = (event) => {
  if (event.target.classList.contains("new-input")) {
    // console.log(id)
    if (event.key === keyEnter) {
      editNew(event);
    }
    if (event.key === keyEscape) {
      displayList();
    }
  }
};

list.addEventListener("dblclick", changeDescription);
list.addEventListener("click", removeOnce);
list.addEventListener("click", toggleTodo);
addButton.addEventListener("click", task);
list.addEventListener('keyup', changeDescriptionFinish);
inputBox.addEventListener('keydown', addButtonEnter);
allButton.addEventListener('click', swapFocus);
pagesPagination.addEventListener('click', NextPage);
list.addEventListener('blur', editNew, true);
checkAllInput.addEventListener('click', checkAll);
removeChecked.addEventListener('click', removeCheck)

 })()
