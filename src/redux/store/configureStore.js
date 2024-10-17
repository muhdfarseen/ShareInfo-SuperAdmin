import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/theme/themeSlice';
import authReducer from '../reducers/auth/authSlice';
import { authApi } from '../api-services/login';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
});
