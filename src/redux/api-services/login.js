import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINTS } from '../../config/api-end-points.js';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${ENDPOINTS.BASE_URL}` }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body) => ({
                url: ENDPOINTS.login,
                method: 'POST',
                body
            })
        })
    })
});

export const { useLoginUserMutation } = authApi;
