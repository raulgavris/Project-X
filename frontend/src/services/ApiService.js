import axios from 'axios';

// Default API will be your root

// const API_ROOT = process.env.URL || 'http://0.0.0.0:8000/api/';
const API_ROOT = process.env.URL || 'http://127.0.0.1:8000/api/';
// const API_ROOT = process.env.URL || 'http://localhost:8000/api/';


const TIMEOUT = 5000;
const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'JWT ' + sessionStorage.getItem('access_token'),
};

class ApiService {
  constructor({ baseURL = API_ROOT, timeout = TIMEOUT, headers = HEADERS, auth }) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
      auth,
    });

    this.client = client;
    this.post = this.post.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleError = this.handleError.bind(this);
    client.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    const originalRequest = error.config;

    if (error.response.data.code === "token_not_valid" && error.response.status === 401 && error.response.statusText === "Unauthorized") {
      const refreshToken = sessionStorage.getItem('refresh_token');

      let bareRefreshToken;
      if ( refreshToken ) {
        bareRefreshToken = refreshToken.replace("JWT ", '');
      } else {
        window.location.href = '/admin-login/';
        return Promise.reject(error);
      }
      if (bareRefreshToken !== 'undefined' && bareRefreshToken !== null){
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        console.log(tokenParts.exp);

        if (tokenParts.exp > now) {
          return this.client.post('/token/refresh/', {refresh: refreshToken})
                  .then((response) => {

                    sessionStorage.setItem('access_token', response.data.access);
                    sessionStorage.setItem('refresh_token', response.data.refresh);

                    this.client.defaults.headers['Authorization'] = "JWT " + response.data.access;
                    originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                    return this.client(originalRequest);
                  })
                  .catch(err => {
                    console.log(err)
                  });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = '/admin-login/';
        }
      } else {
        console.log("Refresh token not available.")
        window.location.href = '/admin-login/';
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }

  async get(path) {
    const response = await this.client.get(path);
    return response;
  }

  async post(path, payload) {
    const response = await this.client.post(path, payload);
    return response;
  }

  async put(path, payload) {
    const response = await this.client.put(path, payload);
    return response;
  }

  async patch(path, payload) {
    const response = await this.client.patch(path, payload);
    return response;
  }

  async delete(path) {
    const response = await this.client.delete(path);
    return response;
  }
}

export default ApiService;