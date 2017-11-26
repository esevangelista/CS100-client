import axios from 'axios';

export const getFriendCount = () => {
    return axios.get('/api/friendCount/');
}

export const getFriends = () => {
    return axios.get('/api/friend/')
}