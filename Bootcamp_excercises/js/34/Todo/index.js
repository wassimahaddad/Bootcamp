let todoList = [];

function addItem(taskName) {
  let todo = {};
  todo.id = todoList.length;
  todo.task = taskName;
  todo.isCompleted = false;
  todoList.push(todo);
}

function DeleteItem(taskName) {
  for (let i = 0; i < todoList.length; i++) {
    if (Object.values(todoList)[i].task === taskName) {
      todoList.splice(i, 1);
    }
  }
}

function markDone(taskName) {
  for (let i = 0; i < todoList.length; i++) {
    if (Object.values(todoList)[i].task === taskName) {
      todoList[i].isCompleted = true;
    }
  }
}
function unmarkDone(taskName) {
  for (let i = 0; i < todoList.length; i++) {
    if (Object.values(todoList)[i].task === taskName) {
      todoList[i].isCompleted = false;
    }
  }
}

function list() {
  console.log(todoList);
}

addItem("1");
addItem("3");
addItem("2");
console.log("create 3 items");
list();
console.log("delete item 3 ");
DeleteItem("3");
list();
console.log("mark done item 1");
markDone("1");
list();
console.log("unmark done item 1");
unmarkDone("1");
list();
