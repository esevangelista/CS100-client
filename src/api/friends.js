import axios from 'axios';

export const getFriendCount = () => {
    return axios.get('/api/friendCount/')
}