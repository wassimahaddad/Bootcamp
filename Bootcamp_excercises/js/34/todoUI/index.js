let todoList = [];

// -----------------------------------------
// create items
function addItem() {
  let tName = document.querySelector("#task-text").value;
  let todo = {};
  todo.id = todoList.length;
  todo.task = tName;
  todo.isCompleted = false;
  const date = new Date();
  const created = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  todo.created = created;
  todo.isImportant = isImportant;
  todoList.push(todo);
  document.querySelector("#task-text").value = "";
  document.querySelector("#important").checked = false;
  isImportant = false;
  list();
}

// delete item
function DeleteItem(el) {
  let i = el.parentElement.lastChild.previousSibling.textContent;
  todoList.splice(i - 1, 1);
  list();
}
// edit items
function editItems(el) {
  const text = el.parentElement.lastChild.textContent;
  el.parentElement.lastChild.remove();
  const editInput = document.createElement("input");
  editInput.value = text;
  const applyChange = document.createElement("button");
  applyChange.textContent = "Apply";
  applyChange.classList.add("task-actions");
  applyChange.addEventListener("click", (e) => applyChanges(e.target));
  el.parentElement.appendChild(editInput);
  el.parentElement.appendChild(applyChange);
}
// apply
function applyChanges(el) {
  const input = el.previousSibling.value;
  const index = el.previousSibling.previousSibling.previousSibling.textContent;
  console.log(input);
  console.log(index);
  todoList[index - 1].task = input;
  list();
}

// check/uncheck
let isCrossed = false;
function checkUncheck(el) {
  if (isCrossed === false) {
    el.nextSibling.classList.add("cross");
    isCrossed = true;
    let index = el.previousSibling.textContent;
    todoList[index - 1].isCompleted = true;
  } else {
    el.nextSibling.classList.remove("cross");
    isCrossed = false;
  }
}
// list items
function list() {
  document.querySelector(".display").innerHTML = "";
  todoList.map((obj) => {
    const line = document.createElement("div");
    const displayList = document.querySelector(".display");
    displayList.appendChild(line);
    line.className = "line";

    // delete
    const deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete";
    deleteTask.classList.add("task-actions");
    deleteTask.addEventListener("click", (e) => DeleteItem(e.target));
    // edit
    const editTask = document.createElement("button");
    editTask.textContent = "Edit";
    editTask.classList.add("task-actions");
    editTask.addEventListener("click", (e) => editItems(e.target));

    // checkbox
    const check = document.createElement("input");
    check.type = "checkbox";
    check.classList.add("checkbox");
    check.addEventListener("change", (e) => checkUncheck(e.target));

    //task number
    const number = document.createElement("div");
    number.textContent = obj.id + 1;

    // task name
    const item = document.createElement("li");
    item.textContent = obj.task;
    item.classList.add(".task-name");
    // append
    line.appendChild(deleteTask);
    line.appendChild(editTask);
    line.appendChild(number);
    line.appendChild(check);
    line.appendChild(item);
  });
}

isImportant = false;
function setImportant() {
  isImportant = true;
}

const create = document.querySelector(".create");
// const displayList = document.querySelector(".display");

// ! listener
create.addEventListener("click", addItem);

const important = document.querySelector("#important");

important.addEventListener("change", setImportant);
