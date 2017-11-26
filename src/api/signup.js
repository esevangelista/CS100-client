import axios from 'axios';

export const signup = credentials => {
    return axios.post('/api/signup', credentials);
}