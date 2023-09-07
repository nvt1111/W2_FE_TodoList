import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoShow() {
    const [todos, setTodos] = useState([]);// khởi tạo là 1 arr

    async function loadTodoes() {
        const resp = await fetch('http://localhost:3001/api/todos');
        const todolist = await resp.json(); //  Obj
        setTodos(todolist["data"]);
        return todolist;
    }

    useEffect(() => {
        console.log('Component mounted');
        loadTodoes();
    }, [])

    const addTodo = async text => {
        try {
            const resp = await fetch("http://localhost:3001/api/todos", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "title": text,
                    "completed": false
                }),
            });

            const res = await resp.json(); // ctx.body.data
            const { data } = res;
            if (res.success) {
                setTodos([...data] || [])
            }
        } catch (e) {
            console.error(e)
        }
    };

    const completeTodo = async (idTodo) => {
        try {
            const resp = await fetch(`http://localhost:3001/api/todo/${idTodo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const res = await resp.json(); // ctx.body.data
            const { data } = res;
            // console.log(data);
            if (res.success) {
                setTodos([...data] || [])
            }

        } catch (e) {
            console.error(e)
        }

    };
    const removeTodo = async (idTodo) => {
        try {
            const resp = await fetch(`http://localhost:3001/api/todo/${idTodo}`, {
                method: 'DELETE'
            });
            const data = await resp.json();
            if (data.success) {
                setTodos([...data.data] || [])
            }
        } catch (e) {
            console.error(e)
        }
    };
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };
    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        todo={todo}
                        idTodo={todo.id}
                        completeTodo={completeTodo} //truyên hàm
                        removeTodo={removeTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo} setValue={setValue} value={value} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default TodoShow;