import React, { useState } from 'react';

function TodoForm({ addTodo, handleSubmit, value, setValue }) {

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

export default TodoForm;