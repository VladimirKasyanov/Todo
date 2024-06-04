if (event.target.classList.contains("label")) {
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