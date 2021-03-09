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
  const index =
    el.previousSibling.previousSibling.previousSibling.previousSibling
      .previousSibling.previousSibling.textContent;
  console.log(input);
  console.log(index);
  todoList[index - 1].task = input;
  list();
}

// check/uncheck
function checkUncheck(el) {
  let index = el.previousSibling.textContent;
  if (el.checked === true) {
    todoList[index - 1].isCompleted = true;
  } else {
    todoList[index - 1].isCompleted = false;
  }
}
//sort by completed
function sortCompleted() {
  let sortTempArr = [];
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].isCompleted === false) {
      sortTempArr.push(todoList[i]);
      console.log(todoList[i].isCompleted);
    }
  }
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].isCompleted === true) {
      sortTempArr.push(todoList[i]);
      console.log(todoList[i].isCompleted);
    }
  }
  todoList = sortTempArr;
  list();
}

//set important
isImportant = false;
function setImportant() {
  isImportant = true;
}
// sort by important
function sortImportant() {
  let sortTempArr = [];
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].isImportant === true) {
      sortTempArr.push(todoList[i]);
      console.log(todoList[i].isImportant);
    }
  }
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].isImportant === false) {
      sortTempArr.push(todoList[i]);
      console.log(todoList[i].isImportant);
    }
  }
  todoList = sortTempArr;
  list();
}

// list items
function list() {
  document.querySelector(".display").innerHTML = "";
  todoList.map((obj) => {
    const line1 = document.createElement("div");
    const displayList = document.querySelector(".display");
    displayList.appendChild(line1);
    line1.className = "line1";

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

    // completed checkbox
    const check = document.createElement("input");
    check.type = "checkbox";
    check.classList.add("checkbox");
    if (obj.isCompleted === true) {
      check.checked = true;
    } else {
      check.checked = false;
    }
    check.addEventListener("change", (e) => checkUncheck(e.target));

    //task number
    const number = document.createElement("div");
    number.textContent = obj.id + 1;

    // task name
    const item = document.createElement("li");
    item.textContent = obj.task;
    item.classList.add(".task-name");
    // created
    const created = document.createElement("div");
    created.textContent = obj.created;
    // important
    const important = document.createElement("div");
    const importantCbox = document.createElement("input");
    importantCbox.type = "checkbox";
    if (obj.isImportant === true) {
      importantCbox.checked = true;
    } else {
      importantCbox.checked = false;
    }
    importantCbox.addEventListener("change", () => (obj.isImportant = true));
    important.classList.add("important");
    important.textContent = "Important:";
    // append
    line1.appendChild(deleteTask);
    line1.appendChild(editTask);
    line1.appendChild(number);
    line1.appendChild(check);
    line1.appendChild(created);
    line1.appendChild(important);
    line1.appendChild(importantCbox);
    line1.appendChild(item);
  });
}

const create = document.querySelector(".create");
// const displayList = document.querySelector(".display");

// ! listener
create.addEventListener("click", addItem);

const important = document.querySelector("#important");

important.addEventListener("change", setImportant);
const completed = document.querySelector("#sort-completed");
completed.addEventListener("click", sortCompleted);
const byImportant = document.querySelector("#sort-important");
byImportant.addEventListener("click", sortImportant);
const byDate = document.querySelector("#sort-date");
byDate.addEventListener("click", sortByDate);

function sortByDate() {
  todoList.sort((a, b) =>
    a.created > b.created ? 1 : b.created > a.created ? -1 : 0
  );
  list();
}
