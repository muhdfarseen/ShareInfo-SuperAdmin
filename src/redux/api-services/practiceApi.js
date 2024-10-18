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
        })
    })
});

export const { useGetPracticeListQuery, useGetCategoryListQuery } = practiiceApi;
