import { createSlice } from '@reduxjs/toolkit';

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
        loginUser: (state, action) => {
            localStorage.setItem('access_token', action.payload.access_token);
            localStorage.setItem('refresh_token', action.payload.refresh_token);
            state.access_token = action.payload.access_token;
            state.refresh_token = action.payload.refresh_token;
            state.email = action.payload.email;
            state.is_profile_created = action.payload.is_profile_created;
            state.full_name = action.payload.full_name;
            state.designation = action.payload.designation;
            state.profile = action.payload.profile;
        },

        authTokenChange: (state, action) => {
            localStorage.setItem('access_token', action.payload.access_token);
            state.access_token = action.payload.access_token;
        },

        logoutUser: (state) => {
            localStorage.clear();
            state.access_token = '';
            state.refresh_token = '';
            state.email = '';
            state.is_profile_created = false;
            state.full_name = '';
            state.designation = '';
            state.profile = '';
        }
    }
});

export const { loginUser, logoutUser, authTokenChange } = authSlice.actions;
export default authSlice.reducer;
