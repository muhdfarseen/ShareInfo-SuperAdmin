import { Box, Flex, RadioCards, Text } from '@radix-ui/themes';
import { LeaderboardTable } from './LeaderboardTable';
import { useState } from 'react';
import { IconTrendingUp, IconCalendarMonth, IconCalendarWeek } from '@tabler/icons-react';

export const Leaderboard = () => {
    const [value, setValue] = useState('0');
    return (
        <div>
            <Box style={{ padding: '30px 40px 30px 40px', width: '100%' }} width={'100%'}>
                <Box mb={'6'} maxWidth='600px'>
                    <RadioCards.Root
                        variant='classic'
                        onValueChange={(newValue) => setValue(newValue)}
                        value={value}
                        columns={{ initial: '1', sm: '3' }}>
                        <RadioCards.Item value='0'>
                            <Flex align={'center'} gap={'2'} width='100%'>
                                <IconTrendingUp size={18} />
                                <Text weight='bold'>Global Ranking</Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value='1'>
                            <Flex align={'center'} gap={'2'} width='100%'>
                                <IconCalendarMonth size={18} />
                                <Text weight='bold'>Monthly Ranking</Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value='2'>
                            <Flex align={'center'} gap={'2'} width='100%'>
                                <IconCalendarWeek size={18} />
                                <Text weight='bold'>Weekly Ranking</Text>
                            </Flex>
                        </RadioCards.Item>
                    </RadioCards.Root>
                </Box>

                <LeaderboardTable option={value} />
            </Box>
        </div>
    );
};
