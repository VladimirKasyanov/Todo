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

const counter = (event) => {
  event.todoList.length = all
  console.log("event")
  
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


// const filterTodo = () => {
//   switch (condition) { 
//     case 'active':
//     return todoList.filter((todo) => !todo.isChecked); 
// }
// }

const arrayLength =  () => {
  all = todoList.length
  if (all >= 0 );
    console.log("all")


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
