import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import useFetchData from '../../hooks/useFetchApi';
import {
    addTodoApi,
    completeTodoApi,
    removeTodoApi
} from '../../helpers/api/handlerRequest'

function Todoes() {
    const { todos, setTodos } = useFetchData();

    async function addTodo(text) {
        const res = await addTodoApi(text);
        const { data } = res;
        console.log('dfhdfhghgd', res);
        setTodos([...data] || []);
    }
    async function completeTodo(idTodo) {
        const res = await completeTodoApi(idTodo);
        const { data } = res;
        setTodos([...data] || []);
    }
    async function removeTodo(idTodo) {
        const res = await removeTodoApi(idTodo);
        const { data } = res;
        setTodos([...data] || []);

    }


    // const addTodo = async text => {
    //     try {
    //         const bodyData = {
    //             "title": text,
    //             "completed": false
    //         }
    //         const method = 'POST';
    //         const path = '/todos';
    //         const res = await makeRequest({ path, method, bodyData });
    //         const { data } = res;
    //         if (res.success) {
    //             setTodos([...data] || [])
    //         }
    //     } catch (e) {
    //         console.error(e)
    //     }
    // };

    // const completeTodo = async (idTodo) => {
    //     try {
    //         const path = `/todo/${idTodo}`;
    //         const method = 'PUT'
    //         const res = await makeRequest({ path, method })
    //         const { data } = res;
    //         if (res.success) {
    //             setTodos([...data] || [])
    //         }
    //     } catch (e) {
    //         console.error(e)
    //     }

    // };
    // const removeTodo = async (idTodo) => {
    //     try {
    //         const path = `/todo/${idTodo}`;
    //         const method = 'DELETE'
    //         const res = await makeRequest({ path, method });
    //         const { data } = res;
    //         if (res.success) {
    //             setTodos([...data] || [])
    //         }
    //     } catch (e) {
    //         console.error(e)
    //     }
    // };
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

export default Todoes;