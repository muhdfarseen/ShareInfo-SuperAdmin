import { Box, Flex, RadioCards, Text } from '@radix-ui/themes';
import { IconStairs, IconTextCaption, IconRoute } from '@tabler/icons-react';
import { useState } from 'react';
import { BasicOverView } from './BasicOverView/BasicOverView';
import { StepWiseDetails } from './StepWiseDetails/StepWiseDetails';
import { TaskRoadMap } from './TaskRoadMap//TaskRoadMap';

export const TaskDetails = () => {
    const [value, setValue] = useState('1');

    return (
        <div>
            <Box style={{ padding: '30px 40px 30px 40px', width: '100%' }} width={'100%'}>
                <Box maxWidth='600px'>
                    <RadioCards.Root
                        variant='classic'
                        onValueChange={(value) => setValue(value)}
                        defaultValue='1'
                        columns={{ initial: '1', sm: '3' }}>
                        <RadioCards.Item value='1'>
                            <Flex direction='column' gap={'2'} width='100%'>
                                <IconTextCaption />
                                <Text weight='bold'>Basic Overview</Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value='2'>
                            <Flex direction='column' gap={'2'} width='100%'>
                                <IconStairs />
                                <Text weight='bold'>Stepwise Details</Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value='3'>
                            <Flex direction='column' gap={'2'} width='100%'>
                                <IconRoute />
                                <Text weight='bold'>Task RoadMap</Text>
                            </Flex>
                        </RadioCards.Item>
                    </RadioCards.Root>
                </Box>

                {value === '1' && <BasicOverView />}
                {value === '2' && <StepWiseDetails />}
                {value === '3' && <TaskRoadMap />}
            </Box>
        </div>
    );
};
