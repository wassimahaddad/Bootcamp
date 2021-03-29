import React, { useState } from "react";

const Tasks = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

const TodoList = () => {
  const [todo, setTodo] = useState(Tasks);

  const showStatus = (index) => {
    if (todo[index].completed) return <span>&#10003;</span>;
    return "X";
  };

  const changeStatus = (index) => {
    const arr = [...Tasks];
    if (todo[index].completed === false) {
      arr[index].completed = true;
      setTodo(arr);
    } else {
      arr[index].completed = false;
      setTodo(arr);
    }
  };

  const lineThrough = (index) => {
    if (todo[index].completed === true) {
      return "done";
    }
  };

  return (
    <div>
      {todo.map((item, index) => (
        <div className="container" key={`${item.name}${index}`}>
          <div className={lineThrough(index)}>{item.name}</div>
          <div onClick={() => changeStatus(index)}>{showStatus(index)}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
