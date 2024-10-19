import { Heading, Flex, Link, Tabs, Separator, Button } from '@radix-ui/themes';
import { IconChevronRight, IconArrowBackUp } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { TaskWiseTable } from '../../../../ui/PracticeMode/ManageSingleTask/Leaderboard/TaskWiseTable';
import { TaskDetails } from '../../../../ui/PracticeMode/ManageSingleTask/TaskDetails/TaskDetails';
import { Submissions } from '../../../../ui/PracticeMode/ManageSingleTask/Submissions/Submissions';
import { useGetPracticeAboutAndStepsQuery } from '../../../../../redux/api-services/practiceApi';

export const TaskPage = () => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState('taskdetails');

    const { id } = useParams();
    const { data } = useGetPracticeAboutAndStepsQuery(id);

    const handleNavigation = (path) => {
        navigate(`/dashboard/${path}`);
    };

    const goToPreviousPath = (e) => {
        e.preventDefault();
        if (location.key !== 'default') {
            navigate(-1);
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <Flex width={'100%'} direction={'column'}>
            <Flex
                direction={'column'}
                style={{
                    padding: '40px 40px 0 40px',
                    backgroundColor: 'var(--gray-2',
                    width: '100%'
                }}>
                <Flex width={'100%'} mb={'4'} gap={'4'} align={'center'}>
                    <Link
                        color='gray'
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            handleNavigation('challenges');
                        }}
                        size={'1'}
                        weight={'medium'}>
                        Challenges
                    </Link>

                    <IconChevronRight color='gray' size={'15'} />
                    <Link
                        color='gray'
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            handleNavigation('practicemode');
                        }}
                        size={'1'}
                        weight={'medium'}>
                        Practice Mode
                    </Link>
                    <IconChevronRight color='gray' size={'15'} />
                    <Link style={{ cursor: 'pointer' }} size={'1'} weight={'medium'}>
                        Manage Task
                    </Link>
                </Flex>

                <Flex width={'100%'} direction={'column'}>
                    <Flex width={'100%'} align={'center'} justify={'between'}>
                        <Heading>{data?.practice_task}</Heading>
                        <Button
                        type='button'
                        onClick={goToPreviousPath}
                        size={'2'}
                        variant='soft'
                        color='gray'>
                        <IconArrowBackUp style={{ zIndex: '0' }} size={15} />
                        Go Back
                    </Button>
                    </Flex>

                    <Tabs.Root
                        onValueChange={(value) => setSelectedTab(value)}
                        mt={'7'}
                        defaultValue='taskdetails'>
                        <Tabs.List size={'2'}>
                            <Tabs.Trigger value='taskdetails'>Task Details</Tabs.Trigger>
                            <Tabs.Trigger value='submissions'>Submissions</Tabs.Trigger>
                            <Tabs.Trigger value='leaderboard'>Leaderboard</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </Flex>
            </Flex>
            <Separator size={'4'} />

            {selectedTab === 'taskdetails' && <TaskDetails />}
            {selectedTab === 'submissions' && <Submissions />}
            {selectedTab === 'leaderboard' && <TaskWiseTable />}
        </Flex>
    );
};
