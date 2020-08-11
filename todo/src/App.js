/** @format */

import React, { useReducer } from "react";

import "./App.css";
import Form from "./components/Form";
import { reducer, initailState } from "./reducers/todoReducer";
import TodoList from "./components/TodoList";
import { useForm } from "./hooks/useForm";

const formIninalValue = "";

function App() {
  const [formValue, update] = useForm(formIninalValue); //custom hook
  const [{ todo }, dispatch] = useReducer(reducer, initailState);

  const submit = () => {
    dispatch({ type: "ADD_TODO", payload: formValue });
    update(formIninalValue);
  };

  return (
    <div className="big">
      <div className="center">
        <div className="App container">
          <div>
            <Form
              update={update}
              submit={submit}
              value={formValue}
              dispatch={dispatch}
            />
          </div>

          <div>
            {todo.map((data) => {
              return <TodoList key={data.id} dispatch={dispatch} todo={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
