import axios from 'axios';

export function setup() {
  axios.defaults.baseURL = 'https://images-api.nasa.gov/';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.timeout = 10000;
  console.log('Axios has been setup');
}

export function getItemList(query) {
    return axios.get(`search?q=${query}`)
      // .then(response => ({ response }))
      // .catch(error => ({ error }));
}
  