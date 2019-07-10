import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-victor-okuhama.firebaseio.com/'
})

export default instance;