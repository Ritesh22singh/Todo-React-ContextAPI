import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState(""); // Here we are using hook to manager the todo value using usestate
  const { addTodo } = useTodo(); // this is custom hook where we are using addtodo from usetodo

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");

    // Overall, this code snippet is used to handle the form submission event when adding a new todo item. It prevents the default form submission behavior, checks if the input field is not empty, adds a new todo item with default completion status (false), and clears the input field afterwards.
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
