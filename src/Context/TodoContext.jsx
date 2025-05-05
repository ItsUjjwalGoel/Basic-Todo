import {createContext, useContext, useState } from "react";
const Todo = createContext();
export const MyTodo = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        // Check localStorage for saved todos, or default to the initial state
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [
            {
                id: 1,
                msg: "hello",
                completed: false
            }
        ];
    });

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };

    const updateTodo = (updatedTodo, id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toogleComplete = (id) => {
        setTodos((prev) =>
            prev.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x))
        );
    };

    return (
        <Todo.Provider value={{ todos, setTodos, addTodo, updateTodo, deleteTodo, toogleComplete }}>
            {children}
        </Todo.Provider>
    );
};

export const useTodo = () => useContext(Todo);