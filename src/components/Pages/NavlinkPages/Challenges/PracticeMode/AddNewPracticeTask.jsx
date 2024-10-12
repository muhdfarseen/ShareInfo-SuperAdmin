import { Heading, Flex, Link, Separator, Box, RadioCards, Text } from '@radix-ui/themes';
import { IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AboutTask } from '../../../../ui/PracticeMode/AddNewPracticeTask/AboutTask';
import { Steps } from '../../../../ui/PracticeMode/AddNewPracticeTask/Steps';
import { Roadmap } from '../../../../ui/PracticeMode/AddNewPracticeTask/Roadmap';
import { Preview } from '../../../../ui/PracticeMode/AddNewPracticeTask/Preview';

export const AddNewPracticeTask = () => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState('1');

    const handleNavigation = (path) => {
        navigate(`/dashboard/${path}`);
    };

    return (
        <Flex direction={'column'} width={'100%'}>
            <Flex width={'100%'} direction={'column'}>
                <Flex
                    height={'100%'}
                    direction={'row'}
                    justify={'between'}
                    align={'center'}
                    style={{
                        padding: '40px 40px 40px 40px',
                        backgroundColor: 'var(--gray-2)',
                        width: '100%'
                    }}>
                    <Flex direction={'column'}>
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
                                Add New Practice Task
                            </Link>
                        </Flex>

                        <Flex width={'100%'} justify={'between'}>
                            <Heading>Add New Practice Task</Heading>
                        </Flex>
                    </Flex>

                    <Box>
                        <RadioCards.Root
                            size={'1'}
                            variant='classic'
                            defaultValue={selectedTab}
                            onValueChange={(value) => setSelectedTab(value)}
                            columns={{ initial: '1', sm: '4' }}>
                            <RadioCards.Item value='1'>
                                <Flex direction='row' gap={'3'} width='100%'>
                                    <Text weight='bold'>1</Text>
                                    <Text>Task Overview</Text>
                                </Flex>
                            </RadioCards.Item>
                            <RadioCards.Item value='2'>
                                <Flex direction='row' gap={'3'} width='100%'>
                                    <Text weight='bold'>2</Text>
                                    <Text>Steps</Text>
                                </Flex>
                            </RadioCards.Item>
                            <RadioCards.Item value='3'>
                                <Flex direction='row' gap={'3'} width='100%'>
                                    <Text weight='bold'>3</Text>
                                    <Text>Roadmap</Text>
                                </Flex>
                            </RadioCards.Item>
                            <RadioCards.Item value='4'>
                                <Flex direction='row' gap={'3'} width='100%'>
                                    <Text weight='bold'>4</Text>
                                    <Text>Preview</Text>
                                </Flex>
                            </RadioCards.Item>
                        </RadioCards.Root>
                    </Box>
                </Flex>
                <Separator size={'4'} />

                <Box style={{ padding: '30px 40px 30px 40px', width: '100%' }} width={'100%'}>
                    {selectedTab === '1' && <AboutTask />}
                    {selectedTab === '2' && <Steps />}
                    {selectedTab === '3' && <Roadmap />}
                    {selectedTab === '4' && <Preview />}
                </Box>
            </Flex>
        </Flex>
    );
};
