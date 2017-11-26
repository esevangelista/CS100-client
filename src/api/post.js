import axios from 'axios';

export const getPosts = page => {
    return axios.get('api/post', page);
}

export const getPostCount = id => {
    return axios.get('api/postCount', id)
}

export const post = () => {
    return axios.post('api/post');
}