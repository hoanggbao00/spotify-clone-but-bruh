import axios from 'axios';

const API_KEY = '42499c6b01mshcb238780e836e74p13029fjsnd662aaddf6eb';
const API_URL = 'shazam.p.rapidapi.com'

const instance = axios.create({
  baseURL: `https://${API_URL}`,
  timeout: 10000,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_URL
  },
});

/**
 * Add a request interceptor
 */ 
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

/**
 * Add a response interceptor
 *  */
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance