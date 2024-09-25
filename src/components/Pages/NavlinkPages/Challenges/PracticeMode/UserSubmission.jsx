import { Heading, Flex, Link, Separator } from '@radix-ui/themes';
import { IconChevronRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export const UserSubmission = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(`/dashboard/${path}`);
    };

    return (
        <Flex height={'182px'} width={'100%'} direction={'column'}>
            <Flex
                height={'100%'}
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
                    <Link
                        color='gray'
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            handleNavigation('managetask');
                        }}
                        size={'1'}
                        weight={'medium'}>
                        Manage Task
                    </Link>

                    <IconChevronRight color='gray' size={'15'} />
                    <Link style={{ cursor: 'pointer' }} size={'1'} weight={'medium'}>
                        Submission
                    </Link>
                </Flex>

                <Flex width={'100%'} direction={'column'}>
                    <Heading>Mastering UI/UX Design Fundamentals</Heading>
                </Flex>
            </Flex>
            <Separator size={'4'} />
        </Flex>
    );
};
