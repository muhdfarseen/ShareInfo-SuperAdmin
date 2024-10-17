import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/theme/themeSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
});
