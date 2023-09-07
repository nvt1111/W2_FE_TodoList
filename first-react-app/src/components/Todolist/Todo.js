import React from 'react';

function Todo({ todo, idTodo, completeTodo, removeTodo }) {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
            {todo.title}
            <div>
                <button onClick={() => completeTodo(idTodo)}>Complete</button>
                <button onClick={() => removeTodo(idTodo)}>x</button>
            </div>
        </div>
    );
}

export default Todo;