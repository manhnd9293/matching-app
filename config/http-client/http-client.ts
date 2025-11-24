import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpClient = axios.create({
  baseURL: `http://localhost:9001/api/v1`,
});
import { router } from 'expo-router';

httpClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = AsyncStorage.getItem("accessToken");
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log({error})

    if(error.response) {
      if(error.response.status === 401) {
        console.log('unauthenticated error');
        router.navigate('/login');
      }
    }
    return Promise.reject(error);
  },
);

export default httpClient;
