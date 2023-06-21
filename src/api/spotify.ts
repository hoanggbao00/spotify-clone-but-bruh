import axios from '../CustomAxios';
import oldAxios from 'axios'
import { homeData } from '../homedata';

const routes = {
  user: '',
  search: '/search',
  track: '/songs/get-details',
};

const SpotifyAPI = {
  getProfile: async (userId:string = '31g5s7ovuhnzp3tbgq2hokgvrtie') => {
    const requestUrl = {
      method: 'GET',
      url: `https://spotify-scraper.p.rapidapi.com/v1/user/profile`,
      params: {
        userId: userId,
      },
      headers: {
        'X-RapidAPI-Key': '42499c6b01mshcb238780e836e74p13029fjsnd662aaddf6eb',
        'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com',
      },
    };

    try {
      const response = await oldAxios.request(requestUrl);

      return response;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  getSearch: async (query: string) => {
    const requestUrl = {
      method: 'GET',
      url: '/search',
      params: {
        term: query,
        locale: 'vi-VN',
        offset: '0',
        limit: '10',
      },
    };

    try {
      const response = await axios.request(requestUrl);

      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  getTrackById: async (id: string) => {
    const requestUrl = {
      method: 'GET',
      url: routes.track,
      params: {
        key: id,
        locale: 'vi-VN',
      },
    };

    try {
      const response = await axios.request(requestUrl);

      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  getHomeData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(homeData);
      }, 1000);
    });
  },
};

export default SpotifyAPI;
