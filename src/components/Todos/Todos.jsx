import React, {Component} from 'react';
import TodoItems from '../TodoItems/TodoItems';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoitems: [
                {
                    id: 1,
                    title: 'Learn react'
                },
                {
                    id: 2,
                    title: 'Practice react'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul>
                    {
                        this.state.todoitems.map(todoitem => {
                            return (
                                <TodoItems title="todoitem.title" />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todos;
