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
    config.headers['x-auth-token'] = localStorage.getItem('token');
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
      
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location = "/login"
      
     
      
    }
    return Promise.reject(error);
  }
);

export default axiosClient;