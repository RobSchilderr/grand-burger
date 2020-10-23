import axios from 'axios';

const instance = axios.create ({
  baseURL: 'https://react-hamburger-cfcf0.firebaseio.com/'
});

export default instance;