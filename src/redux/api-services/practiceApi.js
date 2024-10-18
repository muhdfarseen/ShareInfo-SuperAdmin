import { createApi } from '@reduxjs/toolkit/query/react';
import { ENDPOINTS } from '../../config/api-end-points.js';
import { baseQueryWithReauth } from './baseQryReauth.js';

export const practiiceApi = createApi({
    reducerPath: 'practiiceApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getPracticeList: builder.query({
            query: () => ENDPOINTS.practiceList
        }),
        getCategoryList: builder.query({
            query: () => ENDPOINTS.categoryList
        }),
        getLeaderboardGlobal: builder.query({
            query: () => ENDPOINTS.leaderboardGlobal
        }),
        getLeaderboardMonthly: builder.query({
            query: () => ENDPOINTS.leaderboardMonthly
        }),
        getLeaderboardWeakly: builder.query({
            query: () => ENDPOINTS.leaderboardWeakly
        })
    })
});

export const {
    useGetPracticeListQuery,
    useGetCategoryListQuery,
    useGetLeaderboardGlobalQuery,
    useGetLeaderboardMonthlyQuery,
    useGetLeaderboardWeaklyQuery
} = practiiceApi;
