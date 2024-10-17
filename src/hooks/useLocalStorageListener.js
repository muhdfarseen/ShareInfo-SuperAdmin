import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/reducers/auth/authSlice';

const useLocalStorageListener = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = () => {
            const token = localStorage.getItem('access_token');
            if (!token) {
                dispatch(logoutUser());
                navigate('/');
            }
        };

        window.addEventListener('storage', handleStorageChange);

        const intervalId = setInterval(() => {
            handleStorageChange();
        }, 1000);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(intervalId);
        };
    }, [dispatch, navigate]);
};

/*
    this hook is listening in DshBoard Layout
    src/components/Pages/Dashboard.jsx
*/

export default useLocalStorageListener;
