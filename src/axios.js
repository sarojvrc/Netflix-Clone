import axios from 'axios';

// base url to make the requests to themoviedb.org
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;