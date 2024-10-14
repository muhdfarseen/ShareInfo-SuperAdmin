import { useState, useEffect, createContext } from 'react';
import { Theme } from '@radix-ui/themes';
import { Toaster } from 'react-hot-toast';
import { App } from './App.jsx';
import ReactDOM from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import './index.css';

export const ThemeContext = createContext();

const Main = () => {
    const getInitialTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }

        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return systemPrefersDark ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Theme appearance={theme}>
                <Toaster position='top-center' reverseOrder={false} />
                <App />
            </Theme>
        </ThemeContext.Provider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
