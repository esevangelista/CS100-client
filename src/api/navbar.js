import axios from 'axios';

export const search = (search) => {
    return axios.get(`/api/user/search/${search}`);
}
