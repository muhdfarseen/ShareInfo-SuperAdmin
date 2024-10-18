import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/theme/themeSlice';
import authReducer from '../reducers/auth/authSlice';
import { authApi } from '../api-services/login';
import { practiiceApi } from '../api-services/practiceApi';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [practiiceApi.reducerPath]: practiiceApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(practiiceApi.middleware)
});
