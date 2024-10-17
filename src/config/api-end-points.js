const BASE_URL = import.meta.env.VITE_BASE_URL;

// API Endpoints
const ENDPOINTS = {
    BASE_URL: BASE_URL,

    login: `${BASE_URL}/login/`
};

// Export endpoints
export { ENDPOINTS };
