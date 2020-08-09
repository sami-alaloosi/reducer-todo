/** @format */

export const initailState = {
  todo: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            item: action.payload,
            completed: false,
            id: new Date(),
          },
        ],
      };

    case "COMPLETE_TASK":
      const toggleTodo = state.todo.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      return {
        ...state,
        todo: toggleTodo,
      };

    case "CLEAR_TODO":
      const clearTodo = state.todo.filter((todo) => todo.completed === false);

      return {
        ...state,
        todo: clearTodo,
      };

    default:
      return state;
  }
};
