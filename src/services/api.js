import axios from 'axios';

//url da Api do blockchain
const api = axios.create({
    baseURL: 'http://blockchain.info/'
});

export default api;