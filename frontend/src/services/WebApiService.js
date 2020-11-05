import ApiService from './ApiService';

const BASE_URL = 'http://0.0.0.0:8000/api/';
const client = new ApiService({ baseURL: BASE_URL });

const WebApiService = {};

WebApiService.getHelloWorld = () => client.get('/hello_world/');
WebApiService.postHelloWorld = (payload) => client.post('hello_world/', payload);

// portfolioApi.postToken = (payload) => client.post('/token/obtain/', payload);
// portfolioApi.postBlackList = (payload) => client.post('/blacklist/', payload);

export default WebApiService;