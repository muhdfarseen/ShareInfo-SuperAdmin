import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../components/Pages/Login';
import { NotFound } from '../components/Pages/NotFound';
import { Dashboard } from '../components/Pages/Dashboard';
import { Challenges } from '../components/Pages/NavlinkPages/Challenges/Challenges';
import { PracticeMode } from '../components/Pages/NavlinkPages/Challenges/PracticeMode/PracticeMode';
import { JobHuntMode } from '../components/Pages/NavlinkPages/Challenges/JobHuntMode/JobHuntMode';
import { MyAccount } from '../components/Pages/MyAccount';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'challenges',
                element: <Challenges />
            },
            {
                path: 'practicemode',
                element: <PracticeMode />
            },
            {
                path: 'jobhunmode',
                element: <JobHuntMode />
            }
        ]
    },
    {
        path: 'myaccount',
        element: <MyAccount />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);
