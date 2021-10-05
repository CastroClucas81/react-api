import axios from 'axios';

//CONSTANTE PARA UMA REQUISIÇÃO GENÉRICA
const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q=',
});

export default api;