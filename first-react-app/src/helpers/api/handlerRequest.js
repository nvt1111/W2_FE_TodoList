import makeRequest from './makeRequest';

const addTodoApi = async text => {
    try {
        const bodyData = {
            "title": text,
            "completed": false
        }
        const method = 'POST';
        const path = '/todos';

        return await makeRequest({ path, method, bodyData });

    } catch (e) {
        console.error(e)
    }
};

const completeTodoApi = async (idTodo) => {
    try {
        const path = `/todo/${idTodo}`;
        const method = 'PUT';

        return await makeRequest({ path, method });

    } catch (e) {
        console.error(e)
    }
};
const removeTodoApi = async (idTodo) => {
    try {
        const path = `/todo/${idTodo}`;
        const method = 'DELETE';

        return await makeRequest({ path, method });

    } catch (e) {
        console.error(e)
    }
};

export {
    addTodoApi,
    completeTodoApi,
    removeTodoApi
}