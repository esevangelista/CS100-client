import axios from 'axios';

export const search = (search) => {
    return axios.get(`/api/user/search/${search}`);
}

export const getUser = id => {
    return axios.get(`/api/user/${id}`);
}
