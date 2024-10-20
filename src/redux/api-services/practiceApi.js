import { createApi } from '@reduxjs/toolkit/query/react';
import { ENDPOINTS } from '../../config/api-end-points.js';
import { baseQueryWithReauth } from './baseQryReauth.js';

export const practiiceApi = createApi({
    reducerPath: 'practiiceApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ENDPOINTS.profile
        }),
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
        }),
        getLeaderboardPractice: builder.query({
            query: (practiceId) => `${ENDPOINTS.leaderboardPractice}${practiceId}/`
        }),
        getPracticeAboutAndSteps: builder.query({
            query: (practiceId) => `${ENDPOINTS.managePracticeAboutAndSteps}${practiceId}/`
        }),
        getProcess: builder.query({
            query: (practiceId) => `${ENDPOINTS.manageProcess}${practiceId}/`
        }),
        updateProfile: builder.mutation({
            query: (profileData) => ({
                url: ENDPOINTS.profile,
                method: 'PUT',
                body: profileData
            })
        }),
        resetPassword: builder.mutation({
            query: (passwordData) => ({
                url: ENDPOINTS.resetPassword,
                method: 'POST',
                body: passwordData
            })
        })
    })
});

export const {
    useGetProfileQuery,
    useGetPracticeListQuery,
    useGetCategoryListQuery,
    useGetLeaderboardGlobalQuery,
    useGetLeaderboardMonthlyQuery,
    useGetLeaderboardWeaklyQuery,
    useGetLeaderboardPracticeQuery,
    useGetPracticeAboutAndStepsQuery,
    useGetProcessQuery,
    useUpdateProfileMutation,
    useResetPasswordMutation
} = practiiceApi;
