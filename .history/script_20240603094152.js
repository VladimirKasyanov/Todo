const form = document.querySelector("form");
const inputBox = document.querySelector(".input__box");
const addButton = document.querySelector(".add");
const list = document.querySelector(".list");
const label = document.querySelector(".span");
const newInput = document.querySelector(".new-input")
const completed = document.getElementById("completed-counter")
const all = document.getElementById("total-counter")
const active = document.getElementById("incomplete-counter")


const keyEnter = "Enter"
const keyEscape = "Escape"


let todoList = [];
let condition = "all"
let completedCount = 0;
let incompleteCount = 0;

const task = (event) => {
  event.preventDefault();
  let newTodo = {
    description: inputBox.value,
    checked: false,
    id: Date.now(),
  };

  todoList.push(newTodo);
  console.log(todoList);
  displayList(todoList);
  inputBox.value = "";
};



const displayList = () => {
  // const FilterArray с утра
  list.innerHTML = "";
  todoList.forEach((item) => {
    list.innerHTML += `
<li id ='${item.id}'> 
<input class = 'check' type='checkBox' id='${item.id}' ${
      item.checked ? "checked" : ""
    }>  
<span class='some-text'>${item.description}</span>
  <input class='new-input' type= 'text' hidden></input>
<button type='delete' class='del' id='${item.id}' >x</button>
</li>
`;
  });
};

const counter = () => {
  
}

const toggleTodo = (event) => {
  // todoList[index].checked = !todoList[index].checked;
  if(event.target.type == 'checkbox') {
    const todoId = event.target.id;
    todoList.forEach((item) => {
      if (item.id === Number(todoId)) {
        item.checked = !item.checked;
      }
    })
  }
  
  // displayList(todoList);
};




const checkAll = () => {
  todoList.forEach((todo) => {
    todo.checked = !todo.checked;
  });
  displayList(todoList);
};

// case 'active':
//         return todoList.filter((todo) => !todo.isChecked); 

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
  // let todoText = event.target.parentNode.children[2].value;

  console.log(todoList)

  todoList.forEach((item) => {
    if (item.id === Number(elementId)) {
      item.description = newText
    }
  })

  displayList(todoList);

  //  if (event.sourceCapabilities !== null) {
  //   if (todoText.trim() === '') {
  //   }
  //   displayList(todoList);
  // }
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
      // console.log(event)

      if (event.key === keyEnter){
        const todoId = Number(event.target.parentElement.id);
        console.log(todoId)
        // todoList.forEach((todo) => todo.id !== todoId);
        editNew(todoId);
      

      }
      if (event.key === keyEscape) {
        displayList(todoList)
      }
    }
  }


  // list.addEventListener("blur",changeDescriptionFinish)
  list.addEventListener("dblclick", changeDescription);
  list.addEventListener("click", removeOnce);
  list.addEventListener("click", toggleTodo);
  addButton.addEventListener("click", task);
  // console.log(typeof(li))
  list.addEventListener('keyup', changeDescriptionFinish);
  inputBox.addEventListener('keydown', addButtonEnter);
  
// const displayList = (pageNumber) => {
//   const start = (pageNumber - 1) * tasksPerPage;
//   const end = start + tasksPerPage;
//   const tasksToDisplay = todoList.slice(start, end);

//   list.innerHTML = "";
//   tasksToDisplay.forEach((item) => {
//     // отобразить каждый элемент на странице
//   });
// };

// // Обработчик для кнопки "Предыдущая страница"
// prevButton.addEventListener("click", () => {
//   if (currentPage > 1) {
//     currentPage--;
//     displayList(currentPage);
//   }
// });

// // Обработчик для кнопки "Следующая страница"
// nextButton.addEventListener("click", () => {
//   if (currentPage < Math.ceil(todoList.length / tasksPerPage)) {
//     currentPage++;
//     displayList(currentPage);
//   }
// });

// // Инициализация отображения списка на первой странице
// displayList(currentPage);