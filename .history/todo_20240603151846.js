const form = document.querySelector("form");
const inputBox = document.querySelector(".input__box");
const addButton = document.querySelector(".add");
const list = document.querySelector(".list");
const label = document.querySelector(".span");
const newInput = document.querySelector(".new-input");
const totalCounter = document.getElementById("all");
const completedCounter = document.getElementById("completed");
const incompleteCounter = document.getElementById("active");
const allButton = document.querySelector(".all-button");
const pages = document.querySelector(".pages")
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
  
  page = (Math.ceil(filterTodo().length / itemPerPage))
  
  todoList.push(newTodo);
  displayList(todoList);
  inputBox.value = "";
  thisPage(page);
  
  
};



const displayList = () => {
  
  thisPage(page);
  const sorteredArray = filterTodo().slice((page - 1) * itemPerPage, page * itemPerPage);
  
  let htmllist = "";
  sorteredArray.forEach((item) => {
    list.innerHTML += `
    <li id ='${item.id}'> 
    <input class = 'check' type='checkBox' id='${item.id}' ${
      item.checked ? "checked" : ""
    }>  
    <span class='some-text'>${item.description}</span>
    <input class='new-input' type= 'text' value='${item.description.replace(/\s+/g, '')}' hidden></input>
    <button type='delete' class='del' id='${item.id}' >x</button>
    </li>
    `;
    // completedTab();
    
  });
  list.innerHTML = htmllist;
filterTodo()
pagination();
updateCounters();
// document.getElementById("total-counter").textContent.todoList.length
};

// const counter = () => {
//     console.log(todoList.length)
  
//   displayList(todoList)
// }

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
   updateCounters();
   displayList();
  // displayList(todoList);
  // lletedTab();
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

// const showPage = (page) => {
//   const startIndex = page * itemPerPage;
//   const endIndex = startIndex + itemPerPage;
//   const taskTodoDisplay = todoList.slice(startIndex, endIndex);

//   taskTodoDisplay.forEach((item) => {
//     displayList(item);
//   }) 
// }

 const pagination = () => {
   let pages ="";
   const count = filterTodo().length
   countPage = (Math.ceil(count / itemPerPage))
   lastPage = countPage;

   for  (let i = 0; i < countPage; i+=1){
   pages += `
    <button class ='createPage ${i + 1 === pages ? 'active' : '' }' id = '${i+1}'>'${i+1}'
    </button>
   `
  }
  pages.innerHTML = pages

 }

 function thisPage (newPage){
  if(newPage != lastPage){
    page = newPage  
  }else{
    page = (Math.ceil(filterTodo().length / itemPerPage))
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
      displayList();
      console.log("123456")
      return todoList.filter((item) => !item.checked);
      
      case 'completed':
        displayList();
      return todoList.filter((item) => item.checked);
      
    default:
      return todoList
    };
    
    
};

const chooseCategories = (event) => {

  switch(event.target.id) {
    case 'active':
      condition = 'active'
      displayList();
      break
    
    case 'completed':
      condition = 'completed'
      displayList();
      break

    default:
      condition = 'all'
      displayList();
      break

    };
}

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
  // let todoText = event.target.parentNode.children[2].value;
  
  // console.log(todoList)
  
  todoList.forEach((item) => {
    if (item.id === Number(elementId)) {
        item.description = newText.trim()
    }
  
  })
  displayList(todoList);
  sorteredArray();

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
        // console.log(todoId)
        // todoList.forEach((todo) => todo.id !== todoId);
        editNew(todoId);
        sorteredArray()
      

      }
      if (event.key === keyEscape) {
        displayList()

      }
    }
  }

  


  // list.addEventListener("blur",changeDescriptionFinish)
  list.addEventListener("dblclick", changeDescription);
  list.addEventListener("click", removeOnce);
  list.addEventListener("click", toggleTodo);
  addButton.addEventListener("click", task);
  // pagesButton.addEventListener('click', pagination)
  // console.log(typeof(li))
  list.addEventListener('keyup', changeDescriptionFinish);
  inputBox.addEventListener('keydown', addButtonEnter);
  // list.addEventListener('click', completedTab);
  // totalCounter.addEventListener('click',completedTab);
  allButton.addEventListener('click', chooseCategories)
  // list.addEventListener('click', refillCounter)
  

// const changeDescription = (event) => {
//   const todoId = event.target.parentElement.id;
//   const todo = todoList.find((todo) => todo.id == todoId);

//   if (event.target.classList.contains("label")) {
//     const input = document.createElement("input");
//     input.type = "text";
//     input.value = todo.description;

//     input.addEventListener("blur", () => {
//       todo.description = input.value;
//       displayList(todoList);
//     });

//     event.target.replaceWith(input);
//     input.focus();
//   }
// };
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

// const changeDescriptionFinish = (event) => {
//   if (event.target.classList.contains("new-input")) {
//     const updatedDescription = event.target.value;
//     const todoId = Number(event.target.parentNode.id);
//     const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
    
//     if (event.key === 'Enter') {
//       todoList[todoIndex].description = updatedDescription;
//       displayList(todoList);
//     } else if (event.key === 'Escape') {
//       event.target.value = todoList[todoIndex].description;
//     }
//   }
// };
// inputBox.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     task(event);
//   }
// });

// const displayList = () => {
//   list.innerHTML = "";

//   todoList.forEach((item) => {
//     list.innerHTML += `
//       <li id='${item.id}'>
//         <input class='check' type='checkbox' id='${item.id}' ${
//       item.checked ? "checked" : ""
//     }>
//         <span class='some-text'>${item.description}</span>
//         <input class='new-input' type='text' hidden></input>
//         <button type='delete' class='del' id='${item.id}'>x</button>
//       </li>
//     `;

//     if (item.checked) {
//       completedCount++;
//     } else {
//       incompleteCount++;
//     }
//   });
//   document.getElementById("completed-counter").textContent = completedCount;
//   document.getElementById("incomplete-counter").textContent = incompleteCount;
//   document.getElementById("total-counter").textContent = todoList.length;
// };

// function editTask(event) {
//   if (event.target.classList.contains("some-text")) {
//     const { children } = event.target.parentNode;
//     children[1].hidden = true;
//     const editInput = children[2];
//     editInput.value = event.target.textContent;
//     editInput.hidden = false;
//     editInput.focus();
//   }
// }

// function finishEdit(event) {
//   if (event.target.classList.contains("new-input")) {
//     const todoId = Number(event.target.parentElement.id);
//     const editedTask = event.target.value.trim();
//     if (event.key === keyEnter && editedTask !== "") {
//       todoList = todoList.map((todo) =>
//         todo.id === todoId ? { ...todo, description: editedTask } : todo
//       );
//       displayList();
//     }
//     if (event.key === keyEscape) {
//       displayList();
//     }
//   }
// }


// const updateCounter =  () =>  {
//   // const counter = todoList.filter((item) => !item.check).length
  
//   // const unCount = todoList.filter((item) =>)
//   const completedCount = document.getElementById("completed-counter");
//   const incompleteCount = document.getElementById("incomplete-counter");
//   // const allButton = document.getElementById("total-counter")
//   incompleteCount.textContent = incompleteCount
//   // allButton = document.getElementById("total-counter")
//   allButton.textContent = ` (${todoList.length}) `
//   // (${todoList.length});
// displayList(todoList);
// };