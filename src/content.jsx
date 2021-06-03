import ToDo from "./todo";
import React, { useState } from "react";

function Content() {
  let [task, setTask] = useState("");
  let [items, setItems] = useState([]);

  function itemSet(event) {
    setTask("");
    setItems((prevValue) => {
      return [...prevValue, task];
    });
  }

  function taskSet(event) {
    const newvalue = event.target.value;
    setTask(newvalue);
  }

  function DoubleClick(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="todo-container">
      <input
        autocomplete="off"
        className="input-todo"
        value={task}
        onChange={taskSet}
        placeholder="task"
        name="todoAdd"
      />
      <button onClick={itemSet} className="add-button">
        Add item
      </button>
      <div className="display-todo">
        <ul className="list">
          {items.map((todoitem, index) => (
            <ToDo
              key={index}
              id={index}
              text={todoitem}
              twoClick={DoubleClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
