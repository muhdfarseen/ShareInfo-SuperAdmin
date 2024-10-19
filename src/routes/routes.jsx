import PrivateRoute from '../providers/PrivateRoute';
import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../components/Pages/Login';
import { NotFound } from '../components/Pages/NotFound';
import { Dashboard } from '../components/Pages/Dashboard';
import { Challenges } from '../components/Pages/NavlinkPages/Challenges/Challenges';
import { PracticeMode } from '../components/Pages/NavlinkPages/Challenges/PracticeMode/PracticeMode';
import { JobHuntMode } from '../components/Pages/NavlinkPages/Challenges/JobHuntMode/JobHuntMode';
import { MyAccount } from '../components/Pages/MyAccount';
import { TaskPage } from '../components/Pages/NavlinkPages/Challenges/PracticeMode/TaskPage';
import { UserSubmission } from '../components/Pages/NavlinkPages/Challenges/PracticeMode/UserSubmission';
import { AddNewPracticeTask } from '../components/Pages/NavlinkPages/Challenges/PracticeMode/AddNewPracticeTask';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: 'dashboard',
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
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
                path: 'managetask/:id',
                element: <TaskPage />
            },
            {
                path: 'jobhunmode',
                element: <JobHuntMode />
            },
            {
                path: 'submission',
                element: <UserSubmission />
            },
            {
                path: 'addnewpracticetask',
                element: <AddNewPracticeTask />
            }
        ]
    },
    {
        path: 'myaccount',
        element: (
            <PrivateRoute>
                <MyAccount />
            </PrivateRoute>
        )
    },
    {
        path: '*',
        element: (
            <PrivateRoute>
                <NotFound />
            </PrivateRoute>
        )
    }
]);
