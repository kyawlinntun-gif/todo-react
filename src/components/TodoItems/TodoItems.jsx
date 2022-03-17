import React from "react";
import todoitems from "./TodoItems.module.css";

const TodoItems = (props) => {
    return (
        <li className={todoitems.todoitem}>{props.title}</li>
    )
}

export default TodoItems;
