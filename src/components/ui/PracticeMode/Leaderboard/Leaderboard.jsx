import { Box, Flex, RadioCards, Text } from '@radix-ui/themes';
import { MonthlyTable } from './MonthlyTable';
import { WeeklyTable } from './WeeklyTable';
import { useState } from 'react';

export const Leaderboard = () => {
    const [value, setValue] = useState('1');

    return (
        <div>
            <Box style={{ padding: '30px 40px 30px 40px', width: '100%' }} width={'100%'}>
                <Box mb={'6'} maxWidth='600px'>
                    <RadioCards.Root
                        variant='classic'
                        onValueChange={(value) => setValue(value)}
                        defaultValue='1'
                        columns={{ initial: '1', sm: '3' }}>
                        <RadioCards.Item value='1'>
                            <Flex direction='column' width='100%'>
                                <Text weight='bold'>Current Month</Text>
                                <Text>September</Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value='2'>
                            <Flex direction='column' width='100%'>
                                <Text weight='bold'>Current Week</Text>
                                <Text>16-22 Sep</Text>
                            </Flex>
                        </RadioCards.Item>
                    </RadioCards.Root>
                </Box>

                {value === '1' ?
                    <MonthlyTable />
                :   <WeeklyTable />}
            </Box>
        </div>
    );
};
