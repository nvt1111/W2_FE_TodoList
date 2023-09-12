import { baseUrl } from '../constants/baseUrl';

export default async function makeRequest({ path = '', method, bodyData = {} }) {
    try {
        const url = `${baseUrl}${path}`;
        let headers = {};
        if (method !== 'DELETE') {
            headers = {
                'Content-Type': 'application/json',
            }
        }
        const options = {
            method,
            headers,
            body: bodyData ? JSON.stringify(bodyData) : {}
        }
        const resp = await fetch(url, options);
        const res = await resp.json();

        return res;
    } catch (e) {
        console.error(e);
    }
}