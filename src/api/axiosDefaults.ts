import axios from "axios";

// Set the base URL and content type
axios.defaults.baseURL = 'https://exe-ed-hub-07f60c90d2ab.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

// Add an interceptor for each request
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const axiosReq = axios.create();
export const axiosRes = axios.create();
