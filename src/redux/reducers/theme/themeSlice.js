import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        return storedTheme;
    }

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: getInitialTheme(),
    reducers: {
        toggleTheme: (state) => {
            const newTheme = state === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        },
        setTheme: (state, action) => {
            const theme = action.payload;
            localStorage.setItem('theme', theme);
            return theme;
        }
    }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
