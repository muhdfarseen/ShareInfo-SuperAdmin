import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'sonner';
import { router } from '../routes/routes';
import { Theme } from '@radix-ui/themes';

export const App = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <Theme appearance={theme}>
            <Toaster theme={theme === 'dark' ? 'dark' : 'light'} />
            <RouterProvider router={router} />
        </Theme>
    );
};
