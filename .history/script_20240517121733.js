const todo = []
let resetArray = () => {
    let liElements = todoList.querySelectorAll("li");
    liElements.forEach(li => {
        todoList.removeChild(li);
    });
}