import axios from 'axios';

export const api =  axios.create({
    baseURL:  'http://localhost:3000'
});

export const authHeader = { Authorization: `Token b96658bc5a50613e5e10ada95f35df8db1e7652f` }