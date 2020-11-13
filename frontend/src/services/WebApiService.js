import ApiService from './ApiService';

// const BASE_URL = 'http://0.0.0.0:8000/api/';
<<<<<<< HEAD
// const BASE_URL = 'http://46.101.186.67/api/';
const BASE_URL = 'http://127.0.0.1:8000/api/';
=======
const BASE_URL = 'http://46.101.186.67/api/';
// const BASE_URL = 'http://localhost:8000/api/';

>>>>>>> 1dda5ed7884fcc042e38a70c5ee61bc3098f040f
const client = new ApiService({ baseURL: BASE_URL });

const WebApiService = {};

WebApiService.getHelloWorld = () => client.get('/hello_world/');
WebApiService.postHelloWorld = (payload) => client.post('hello_world/', payload);

<<<<<<< HEAD
WebApiService.getSongList = () => client.get('/songs/');
// to complete post request for songs

// portfolioApi.postToken = (payload) => client.post('/token/obtain/', payload);
// portfolioApi.postBlackList = (payload) => client.post('/blacklist/', payload);
=======
WebApiService.postToken = (payload) => client.post('/token/', payload);
WebApiService.register = (payload) => client.post('/register/', payload);
WebApiService.postBlackList = (payload) => client.post('/blacklist/', payload);

>>>>>>> 1dda5ed7884fcc042e38a70c5ee61bc3098f040f

export default WebApiService;