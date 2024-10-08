import { Heading, Flex, Link, Tabs, Separator } from '@radix-ui/themes';
import { IconChevronRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TaskWiseTable } from '../../../../ui/PracticeMode/ManageSingleTask/Leaderboard/TaskWiseTable';
import { TaskDetails } from '../../../../ui/PracticeMode/ManageSingleTask/TaskDetails/TaskDetails';
import { Submissions } from '../../../../ui/PracticeMode/ManageSingleTask/Submissions/Submissions';

export const TaskPage = () => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState('taskdetails');

    const handleNavigation = (path) => {
        navigate(`/dashboard/${path}`);
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
                    <Heading>Mastering UI/UX Design Fundamentals</Heading>
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
