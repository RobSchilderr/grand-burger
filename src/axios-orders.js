import axios from 'axios';

const instance = axios.create ({
  baseURL: 'https://thegrandburger.firebaseio.com/'
});

export default instance;