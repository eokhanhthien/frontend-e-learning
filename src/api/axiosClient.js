import axios from 'axios';


const axiosClient = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function(config) {
    config.headers['x-auth-token'] = sessionStorage.getItem('token');
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401 || error.response.status === 400) {
      
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
        window.location = "/login"
      
     
      
    }
    return Promise.reject(error);
  }
);

export default axiosClient;