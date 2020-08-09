
 export const initailState = {
    todo: [

    ]
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

              default:
                 return state
        }
}

