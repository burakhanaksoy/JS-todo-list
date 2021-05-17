// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// Event Listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteAndCheck);
//Functions

function addToDo(event) {
  // Prevent form from submitting
  event.preventDefault();

  //TODO DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newToDo = document.createElement("li");
  newToDo.classList.add("todo-item");
  newToDo.innerText = todoInput.value;
  // Append to todoDiv
  todoDiv.appendChild(newToDo);

  // create buttons
  const eraseButton = document.createElement("button");
  eraseButton.classList.add("erase-button");
  eraseButton.innerHTML = '<i class="fas fa-trash"></i>';

  const checkButton = document.createElement("button");
  checkButton.classList.add("check-button");
  checkButton.innerHTML = '<i class="fas fa-check-square"></i>';

  // Add to newToDo <li>
  todoDiv.appendChild(eraseButton);
  todoDiv.appendChild(checkButton);

  // Append to todoList
  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteAndCheck(event) {
  const item = event.target;
  if (item.classList[0] === "erase-button") {
    const div = item.parentElement;
    div.remove();
  }

  // Check Mark
  if (item.classList[0] === "check-button") {
    const div = item.parentElement;
    div.classList.toggle("completed");
  }
}
