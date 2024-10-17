import { createSlice } from '@reduxjs/toolkit';

// No data is Storing in this state data

const initialState = {
    access_token: '',
    refresh_token: '',
    email: '',
    is_profile_created: false,
    full_name: '',
    designation: '',
    profile: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (_, action) => {
            localStorage.setItem('access_token', action.payload.access_token);
            localStorage.setItem('refresh_token', action.payload.refresh_token);
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('full_name', action.payload.full_name);
            localStorage.setItem('designation', action.payload.designation);
        },
        authTokenChange: (_, action) => {
            localStorage.setItem('access_token', action.payload.access_token);
        },
        logoutUser: () => {
            localStorage.clear();
        }
    }
});

export const { loginUser, logoutUser, authTokenChange } = authSlice.actions;
export default authSlice.reducer;
