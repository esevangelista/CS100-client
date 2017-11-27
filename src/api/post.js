import axios from 'axios';

export const getPosts = () => {
    return axios.get('/api/post');
}

export const getUserPosts = id => {
    return axios.get(`/api/post/${id}`);
}

export const getPostCount = () => {
    return axios.get('/api/postCount');
}

export const likePost = (id, action) => {
    return axios.put(`/api/post/${id}`, action);
}

export const post = content => {
    return axios.post('/api/post', content);
}