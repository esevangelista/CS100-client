import axios from 'axios';

export const getPosts = () => {
    return axios.get('/api/post');
}

export const getPostCount = () => {
    return axios.get('/api/postCount')
}

export const post = () => {
    return axios.post('/api/post');
}