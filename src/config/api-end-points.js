

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ENDPOINTS = {
    BASE_URL: BASE_URL,

    login: '/login/',
    refresh: '/token/refresh/',
    practiceList:'/practice/list/',
    categoryList:'/category/'
};

export { ENDPOINTS };
