
 export const initailState = {
    todo: []
}

 export const reducer = (state, action) => {

    switch(action.type){
        default:
             return {
                item: 'Learn About Reducers',
                completed: false,
                id: 12345
        }
        }
}

