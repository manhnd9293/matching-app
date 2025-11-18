import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpClient = axios.create({
  baseURL: `http://localhost:9000/api/v1`,
});

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
    return Promise.reject(error);
  },
);

export default httpClient;
