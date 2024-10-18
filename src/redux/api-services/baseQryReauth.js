// wrapper function for token refresh

import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { ENDPOINTS } from '../../config/api-end-points.js';
import { logoutUser } from '../reducers/auth/authSlice.js';

export const baseQuery = fetchBaseQuery({
    baseUrl: ENDPOINTS.BASE_URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

export const baseQueryWithReauth = async (args, store, extraOptions) => {
    let result = await baseQuery(args, store, extraOptions);

    if (result.error && result.error.status === 401) {
        const refreshToken = localStorage.getItem('refresh_token');

        if (refreshToken) {
            const refreshResult = await baseQuery(
                {
                    url: `${ENDPOINTS.refresh}`,
                    method: 'POST',
                    body: { refresh: refreshToken }
                },
                store,
                extraOptions
            );
            if (refreshResult.data) {
                localStorage.setItem('access_token', refreshResult.data.access_token);

                result = await baseQuery(args, store, extraOptions);
            } else {
                //console.error('Failed to refresh token:', refreshResult.error);
                store.dispatch(logoutUser());
            }
        } else {
            //console.warn('No refresh token found. Logging out...');
            store.dispatch(logoutUser());
        }
    }

    return result;
};
