import React, {useState, useReducer} from 'react';



import './App.css';
import Form from "./components/Form"
import {reducer, initailState} from "./reducers/todoReducer"
import TodoList from "./components/TodoList"

const formIninalValue = ""

function App() {
  const [formValue, setFormValue] = useState(formIninalValue)
  const [ {todo}, dispatch] = useReducer(reducer, initailState)



const update = (value) =>{
  setFormValue(value)
}

const submit = ()=> {
  dispatch({type: 'ADD_TODO', payload: formValue})
  setFormValue(formIninalValue)
}



  return (
    <div className="App">
      <Form
        update={update}
        submit={submit}
        value={formValue}
       />
       
      {todo.map(data => { return <TodoList
                                    key={data.id}
                                    todo={data} />})}
    </div>
  );
}

export default App;
