const changeDescription = (event) => {
  const todoId = event.target.parentElement.id;
  const todo = todoList.find((todo) => todo.id == todoId);

  if (event.target.classList.contains("span")) {
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