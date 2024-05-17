import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  //------------------------------------------------
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);

    //  '...' --> this is spread opearter which will use when we wnat to add data in array with prev values
    // In above method we are adding todo value with if existing value is therewhich unique id for that i used date.now() function
  };
  //-----------------------------------------------------------

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );

    // In here we are going to update the todo, for this we need id for each todo and map
    // function becasue its an array
  };
  //--------------------------------------------------------------------------------

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

    // In this method we are deleteing the todo item by using filter method which will not allow whatever id is given
  };
  //--------------------------------------------------------------------------

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );

    // the toggleComplete function toggles the completion status of a specific todo item in a list of todos and updates the state to reflect this change.
  };

  //----------------------------------------------------------------

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // In useeffect, here we define the local Storage to store the todos
  // while we first check the todos ismpty or what afterwoads we using get and set to add in localstrogae

  // Initialization: When the component mounts, it checks localStorage for stored todos. If it finds any, it sets them as the initial state.
  // Persistence: Whenever the todos state is updated (e.g., adding, deleting, or toggling a todo), the new state is saved to localStorage.
  // This approach ensures that the todo list is persistent across page reloads, as it is stored in the browser's localStorage. When the user revisits the page, the stored todos are loaded and displayed.
  // //--------------------------------------------------------------------

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
