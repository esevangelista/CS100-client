import axios from 'axios';

export const verifyPassword = (credentials) => {
    return axios.put('/api/verify', credentials);
}

export const editprofile = credentials => {
    return axios.put('/api/user', credentials);
}