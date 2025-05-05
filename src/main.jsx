import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { MyTodo } from "./Context/TodoContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MyTodo>
            <App />
        </MyTodo>
    </React.StrictMode>
);

