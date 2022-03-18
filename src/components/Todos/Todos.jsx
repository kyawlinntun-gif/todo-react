import React, {Component} from 'react';
import TodoItems from '../TodoItems/TodoItems';
import todos from './Todos.module.css';

class Todos extends Component {
    state = {
        todoitems: [
            {
                id: 1,
                title: 'Learn react'
            },
            {
                id: 2,
                title: 'Practice react'
            }
        ],
        todoTitle: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const todoitems = [...this.state.todoitems];
        const id = todoitems.length ? todoitems.length+1 : 1;
        todoitems.push({id, title:this.state.todoTitle});
        this.setState({todoitems});
        this.setState({todoTitle: ""});
        this.todoTitle.focus();
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form className={todos.todos} onSubmit={this.handleSubmit}>
                    <input type="text" name="todoTitle" ref={(todoTitle) => {this.todoTitle = todoTitle;}} value={this.state.todoTitle} onChange={this.handleChange} />
                    <button type="submit" >Save</button>
                </form>
                <ul>
                    {
                        this.state.todoitems.map(todoitem => {
                            return (
                                <TodoItems title={todoitem.title} key={todoitem.id} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todos;
