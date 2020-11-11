import ApiService from './ApiService';

// const BASE_URL = 'http://0.0.0.0:8000/api/';
const BASE_URL = 'http://46.101.186.67/api/';
// const BASE_URL = 'http://localhost:8000/api/';

const client = new ApiService({ baseURL: BASE_URL });

const WebApiService = {};

WebApiService.getHelloWorld = () => client.get('/hello_world/');
WebApiService.postHelloWorld = (payload) => client.post('hello_world/', payload);

WebApiService.postToken = (payload) => client.post('/token/', payload);
WebApiService.register = (payload) => client.post('/register/', payload);
WebApiService.postBlackList = (payload) => client.post('/blacklist/', payload);


export default WebApiService;