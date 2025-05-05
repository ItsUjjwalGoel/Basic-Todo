import React, { useEffect } from "react";
import { useTodo } from "./Context/TodoContext.jsx";
import TodoItems from "./assets/Todoitems.jsx";
import TodoForms from "./assets/Todoforms.jsx";

function App() {
  const { todos, setTodos } = useTodo();

  // Load todos from localStorage on initial render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);


  // Save todos to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log("Saved todos to localStorage:", todos); // Logs the current todos
    } catch (error) {
      console.error("Error saving todos to localStorage:", error);
    }
  }, [todos]);


  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForms />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItems todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
