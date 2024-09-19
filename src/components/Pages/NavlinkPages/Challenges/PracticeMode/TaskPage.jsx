import { Heading, Flex, Link, Tabs } from '@radix-ui/themes';
import { IconChevronRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TaskDetails } from '../../../../ui/PracticeMode/TaskDetails/TaskDetails';
import { TaskWiseTable } from '../../../../ui/PracticeMode/Leaderboard/TaskWiseTable';

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
                        href='#'
                        onClick={() => {
                            handleNavigation('challenges');
                        }}
                        size={'1'}
                        weight={'medium'}>
                        Challenges
                    </Link>

                    <IconChevronRight color='#9eb1ff' size={'15'} />
                    <Link
                        href='#'
                        onClick={() => {
                            handleNavigation('practicemode');
                        }}
                        size={'1'}
                        weight={'medium'}>
                        Practice Mode
                    </Link>
                    <IconChevronRight color='#9eb1ff' size={'15'} />
                    <Link href='#' size={'1'} weight={'medium'}>
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

            {selectedTab === 'taskdetails' && <TaskDetails />}
            {selectedTab === 'leaderboard' && <TaskWiseTable />}
        </Flex>
    );
};
