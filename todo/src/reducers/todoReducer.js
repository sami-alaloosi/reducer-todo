
 export const initailState = {
    todo: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }]
}

 export const reducer = (state, action) => {

    switch(action.type){
        case 'ADD_TODO':
             return {
                 ...state,
               todo: [...state.todo,{
                item: action.payload ,
                completed: false,
                id: new Date()
              }]
             }

             case "COMPLETE_TASK":
            const toggleTodo = state.todo.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
              return{
            ...state,
            todo:toggleTodo
              }



            case 'CLEAR_TODO': 
            const clearTodo = state.todo.filter(todo => todo.completed === false)

            return {
                ...state,
                todo: clearTodo
            }

           
                 

              default:
                 return state
        }
}

