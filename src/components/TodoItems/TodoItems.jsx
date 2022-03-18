import React from "react";
import todoitems from "./TodoItems.module.css";

const TodoItems = (props) => {
    return (
        <li className={todoitems.todoitem}>
            <div>{props.title}</div>
            <button className={todoitems.deleteButton}>x</button>
        </li>
    )
}

export default TodoItems;
