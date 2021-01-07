import ApiService from './ApiService';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api/';

const client = new ApiService({ baseURL: BASE_URL });

const WebApiService = {};

WebApiService.getHelloWorld = () => client.get('/hello_world/');
WebApiService.postHelloWorld = (payload) => client.post('hello_world/', payload);

WebApiService.getSongList = () => client.get('/songs/');
// to complete post request for songs

// portfolioApi.postToken = (payload) => client.post('/token/obtain/', payload);
// portfolioApi.postBlackList = (payload) => client.post('/blacklist/', payload);
WebApiService.postToken = (payload) => client.post('/token/', payload);
WebApiService.register = (payload) => client.post('/register/', payload);
WebApiService.postBlackList = (payload) => client.post('/blacklist/', payload);


export default WebApiService;