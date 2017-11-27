import axios from 'axios';

export const getFriendCount = () => {
    return axios.get('/api/friendCount/');
}

export const getFriends = () => {
    return axios.get('/api/friend/');
}

export const getSuggestedFriends = () => {
    return axios.get('/api/suggested/');
}

export const getFriendRequests = () => {
    return axios.get('api/request/');
}

export const addFriend = id => {
    return axios.put(`/api/add/${id}`);
}

export const acceptFriend = id => {
    return axios.put(`/api/accept/${id}`);
}