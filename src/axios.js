import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rentmoto-61ef2-default-rtdb.firebaseio.com'
});

export default instance; 