import axios from 'axios';

export const getUers = () => {
    return axios.get('/users');
}