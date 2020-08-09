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

// const clear = () => {

// }



// console.log(todo.map(data => data.completed))

  return (
    <div className="App">
    <div>
      <Form
        update={update}
        submit={submit}
        value={formValue}
        dispatch={dispatch}
       />
       </div>

       <div >
      {todo.map(data => { return <TodoList
      
                                    key={data.id}
                                    dispatch={dispatch}
                                    todo={data} />})}
    </div>
        
    </div>
  );
}

export default App;
