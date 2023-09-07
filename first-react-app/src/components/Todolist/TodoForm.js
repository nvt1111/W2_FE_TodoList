import React, { useState } from 'react';

function TodoForm({ addTodo, handleSubmit, value, setValue }) {

    return (
        <div class='todo'>
            <form >
                {/* // form => onSubmit */}
                <input
                    type="text"
                    className="input"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                {/* button = onClick */}
            </form>
            <button class='btn' onClick={handleSubmit}>Create Todo</button>
        </div>
    );
}

export default TodoForm;