import React from 'react';
import PropTypes from 'prop-types';
TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
};
TodoList.defaultProps = {
    todos: [],
    onTodoClick: null
}




export default function TodoList(props) {
    const { todos, onTodoClick } = props;
    const handleClick = (todo) => {
        if (onTodoClick) {
            onTodoClick(todo);
            // console.log(todo.target);
        }
    }
    return (
        <ul className='todo-list'
        >
            {todos.map(todo => (
                <li key={todo.id} onClick={() => handleClick(todo)}>{todo.title}</li>
            ))}

        </ul>
    )
}
