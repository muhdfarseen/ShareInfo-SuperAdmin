import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINTS } from '../../config/api-end-points';
import { authTokenChange, logoutUser } from '../reducers/auth/authSlice'; 

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

export const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    const authState = api.getState().auth;
    if (result.error && result.error.status === 401) {
        if (!authState.refresh_token || !authState.access_token) return result;
        const refreshResult = await baseQuery('/token/refresh/', api, extraOptions);
        if (refreshResult.data) {
            api.dispatch(
                authTokenChange({
                    access_token: authState.access_token
                })
            );
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logoutUser());
        }
    }
    return result;
};
