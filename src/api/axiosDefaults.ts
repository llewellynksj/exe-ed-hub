import axios from "axios";

axios.defaults.baseURL = 'https://exe-ed-hub-07f60c90d2ab.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
