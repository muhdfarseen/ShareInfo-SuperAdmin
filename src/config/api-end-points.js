const BASE_URL = import.meta.env.VITE_BASE_URL;

const ENDPOINTS = {
    BASE_URL: BASE_URL,

    login: '/login/',
    refresh: '/token/refresh/',

    profile: '/profile/manage/',

    practiceList: '/practice/list/',
    categoryList: '/category/',

    leaderboardGlobal: '/practice/leaderboard/global/',
    leaderboardMonthly: '/practice/leaderboard/monthly/',
    leaderboardWeakly: '/practice/leaderboard/weakly/',

    managePracticeAboutAndSteps : '/practice/manage/',
    practiceManageStepsUpdate : '/practice/manage-steps/',

    resetPassword: '/reset-password/'
};

export { ENDPOINTS };
