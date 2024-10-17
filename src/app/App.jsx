import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'sonner';
import { router } from '../routes/routes';
import { Theme } from '@radix-ui/themes';
import { store } from '../redux/store/configureStore.js';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import './index.css';

const App = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <Theme appearance={theme}>
            <Toaster theme={theme === 'dark' ? 'dark' : 'light'} />
            <RouterProvider router={router} />
        </Theme>
    );
};

const Main = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
