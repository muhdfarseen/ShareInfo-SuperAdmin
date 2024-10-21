import { Box, Flex, RadioCards, Text, IconButton } from '@radix-ui/themes';
import { IconStairs, IconTextCaption, IconRoute } from '@tabler/icons-react';
import { useState } from 'react';
import { BasicOverView } from './BasicOverView/BasicOverView';
import { StepWiseDetails } from './StepWiseDetails/StepWiseDetails';
import { TaskRoadMap } from './TaskRoadMap/TaskRoadMap';

export const TaskDetails = () => {
    const [value, setValue] = useState('1');

    return (
        <div>
            <Box style={{ padding: '30px 40px 30px 40px', width: '100%' }} width={'100%'}>
                <Flex>
                    <RadioCards.Root
                        variant='classic'
                        onValueChange={(value) => setValue(value)}
                        defaultValue='1'
                        columns={{ initial: '3', sm: '3' }}>
                        <RadioCards.Item value='1'>
                            <Flex align={'center'} gap={'2'} width='100%'>
                                <IconButton asChild size='1' variant='ghost'>
                                    <IconTextCaption />
                                </IconButton>
                                <Text size={'3'} weight='bold'>
                                    About
                                </Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value='2'>
                            <Flex align={'center'} gap={'2'} width='100%'>
                                <IconButton asChild size='1' variant='ghost'>
                                    <IconStairs />
                                </IconButton>
                                <Text size={'3'} weight='bold'>
                                    Steps
                                </Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value='3'>
                            <Flex align={'center'} gap={'2'} width='100%'>
                                <IconButton asChild size='1' variant='ghost'>
                                    <IconRoute />
                                </IconButton>
                                <Text size={'3'} weight='bold'>
                                    Roadmap
                                </Text>
                            </Flex>
                        </RadioCards.Item>
                    </RadioCards.Root>
                </Flex>

                {value === '1' && <BasicOverView />}
                {value === '2' && <StepWiseDetails />}
                {value === '3' && <TaskRoadMap />}
            </Box>
        </div>
    );
};
