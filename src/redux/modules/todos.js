// Action value
const ADD_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "저번 주차를 복습해보기",
    },
    {
      id: 2,
      title: "점심을 먹기",
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todos;