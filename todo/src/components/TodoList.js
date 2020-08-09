/** @format */

import React from "react";

export default function TodoList({ todo, dispatch }) {
  return (
    <div
      className={todo.completed ? "complete" : "uncomplete"}
      onClick={() => dispatch({ type: "COMPLETE_TASK", payload: todo })}
    >
      <div> {todo.item}</div>
    </div>
  );
}
