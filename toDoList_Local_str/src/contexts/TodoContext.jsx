import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todos: " Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},

  //  In Here we define object where some id, msg and complete status
  // along with some method which will addEventListener, update, delete and toggletodos only declaration
});

//---------------------------------------------------

export const useTodo = () => {
  return useContext(TodoContext);

  // This is custom hook who's going to return usecontect from usetod
};

//-------------------------------------------------

export const TodoProvider = TodoContext.Provider;
// This object has a Provider component property, which is used to wrap your component tree and provide the context value to its descendants.

// This one is error free as of now
