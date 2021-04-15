import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/',
    params: {
        key: 'AIzaSyDTk6knBjnCpxswc9N1LL4YnfGHp_194yA'
    } 
})

export default instance;