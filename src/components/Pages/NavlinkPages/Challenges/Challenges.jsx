import { Box, Heading, Card, Flex, IconButton } from '@radix-ui/themes';
import { IconArrowUpRight } from '@tabler/icons-react';
import classes from './Challenges.module.css';
import { useNavigate } from 'react-router-dom';

import practiceImageLight from '../../../../assets/Images/PracticeModeforlight.png';
import practiceImageDark from '../../../../assets/Images/PracticeMode.png';

import jobHuntImageLight from '../../../../assets/Images/JobHuntModelight.png';
import jobHuntImageDark from '../../../../assets/Images/JobHuntMode.png';
import { useSelector } from 'react-redux';

export const Challenges = () => {
    const navigate = useNavigate();

    const theme = useSelector((state) => state.theme);

    const handleNavigation = (path) => {
        navigate(`/dashboard/${path}`);
    };

    return (
        <div style={{ padding: 40, width: '100%', backgroundColor: 'var(--gray-2' }}>
            <Box mb={'5'}>
                <Heading>Challenges</Heading>
            </Box>

            <Flex gap={'6'}>
                <Card
                    onClick={() => handleNavigation('practicemode')}
                    className={classes.challengeCard}>
                    <img
                        width={'400px'}
                        src={theme === 'light' ? practiceImageLight : practiceImageDark}
                        alt='practice image'
                    />
                    <Flex my={'2'} px={'4'} align={'center'} justify={'between'}>
                        <Heading weight={'medium'} size={'5'}>
                            Practice Mode
                        </Heading>
                        <IconButton radius='full' color='gray' size={'3'} variant={'soft'}>
                            <IconArrowUpRight />
                        </IconButton>
                    </Flex>
                </Card>
                <Card
                    onClick={() => handleNavigation('jobhunmode')}
                    className={classes.challengeCard}>
                    <img
                        width={'400px'}
                        src={theme === 'light' ? jobHuntImageLight : jobHuntImageDark}
                        alt='jobhunt image'
                    />
                    <Flex my={'2'} px={'4'} align={'center'} justify={'between'}>
                        <Heading weight={'medium'} size={'5'}>
                            Job Hunt Mode
                        </Heading>
                        <IconButton radius='full' color='gray' size={'3'} variant={'soft'}>
                            <IconArrowUpRight />
                        </IconButton>
                    </Flex>
                </Card>
            </Flex>
        </div>
    );
};
