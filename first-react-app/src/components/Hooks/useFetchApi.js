import { useEffect, useState } from "react";

const useFetchData = () => {
    const [todos, setTodos] = useState([])
    async function loadTodoes() {
        const resp = await fetch('http://localhost:3001/api/todos');
        const todolist = await resp.json(); //  Obj
        setTodos(todolist["data"]);
    }
    useEffect(() => {
        console.log('Component mounted');
        loadTodoes();
    }, [])

    return { todos, setTodos }
}

export default useFetchData
