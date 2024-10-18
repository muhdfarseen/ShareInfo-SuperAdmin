import { Table, Flex, Text, Badge, Spinner, Callout } from '@radix-ui/themes';
import shareInfoCoin from '../../../../assets/Images/ShareInfocoin.svg';
import {
    useGetLeaderboardGlobalQuery,
    useGetLeaderboardMonthlyQuery,
    useGetLeaderboardWeaklyQuery
} from '../../../../redux/api-services/practiceApi';
import { IconCircleNumber0, IconAlertTriangle } from '@tabler/icons-react';
import { DashIcon, DoubleArrowDownIcon, DoubleArrowUpIcon } from '@radix-ui/react-icons';

export const LeaderboardTable = ({ option }) => {
    const {
        data: globalData,
        isLoading: isGlobalLoading,
        error: globalError
    } = useGetLeaderboardGlobalQuery(undefined, {
        skip: option !== '0'
    });

    const {
        data: monthlyData,
        isLoading: isMonthlyLoading,
        error: monthlyError
    } = useGetLeaderboardMonthlyQuery(undefined, {
        skip: option !== '1'
    });

    const {
        data: weeklyData,
        isLoading: isWeeklyLoading,
        error: weeklyError
    } = useGetLeaderboardWeaklyQuery(undefined, {
        skip: option !== '2'
    });

    const data =
        option === '0' ? globalData
        : option === '1' ? monthlyData
        : weeklyData;
    const isLoading =
        option === '0' ? isGlobalLoading
        : option === '1' ? isMonthlyLoading
        : isWeeklyLoading;
    const error =
        option === '0' ? globalError
        : option === '1' ? monthlyError
        : weeklyError;

    if (isLoading)
        return (
            <Flex align={'center'} justify={'center'} height={'300px'}>
                <Spinner size='3' />
            </Flex>
        );

    if (error)
        return (
            <Flex align={'center'} justify={'center'} height={'300px'}>
                <Callout.Root variant='surface' color='red'>
                    <Callout.Icon>
                        <IconAlertTriangle stroke={1} />
                    </Callout.Icon>
                    <Callout.Text>Error: {error.error}</Callout.Text>
                </Callout.Root>
            </Flex>
        );

    if (!data || data.length === 0)
        return (
            <Flex align={'center'} justify={'center'} height={'300px'}>
                <Callout.Root variant='surface' color='gray'>
                    <Callout.Icon>
                        <IconCircleNumber0 stroke={1} />
                    </Callout.Icon>
                    <Callout.Text>No Data found</Callout.Text>
                </Callout.Root>
            </Flex>
        );

    return (
        <div>
            <Table.Root variant='ghost'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell justify={'center'}>Rank</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell justify={'center'}>Enrolled</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell justify={'center'}>
                            Submitted
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell justify={'center'}>
                            Perks Earned
                        </Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data?.map((item, index) => (
                        <Table.Row key={item.rank} justify={'center'} align='center'>
                            <Table.Cell justify={'center'}>
                                <Flex width={'100%'} justify={'center'}>
                                    <Flex width={'50%'} gap={'1'} justify={'between'}>
                                        {item.rank_change > 0 ?
                                            <Badge radius='full' variant='soft' color='green'>
                                                <Flex gap={'1'} justify={'center'} align={'center'}>
                                                    <Text>+{item.rank_change}</Text>
                                                    <DoubleArrowUpIcon />
                                                </Flex>
                                            </Badge>
                                        : item.rank_change < 0 ?
                                            <Badge radius='full' variant='soft' color='red'>
                                                <Flex gap={'1'} justify={'center'} align={'center'}>
                                                    <Text>{item.rank_change}</Text>
                                                    <DoubleArrowDownIcon />
                                                </Flex>
                                            </Badge>
                                        :   <Badge radius='full' variant='soft' color='gray'>
                                                <DashIcon />
                                            </Badge>
                                        }
                                        <Text
                                            weight={'bold'}
                                            color={index < 3 ? 'green' : 'gray'}
                                            size={'3'}>
                                            {item.rank}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Table.Cell>

                            <Table.RowHeaderCell>
                                <Flex align={'center'} gap={'3'}>
                                    <Text size={'3'}>{item.candidate_name}</Text>
                                </Flex>
                            </Table.RowHeaderCell>

                            <Table.Cell>
                                <Badge
                                    variant='surface'
                                    size={'3'}
                                    radius='full'
                                    style={{ width: 'fit-content' }}>
                                    {item.candidate_current_status}
                                </Badge>
                            </Table.Cell>

                            <Table.Cell justify={'center'}>
                                <Text size='3'>{item.enrolled_count}</Text>
                            </Table.Cell>
                            <Table.Cell justify={'center'}>
                                <Text size='3'>{item.submitted_count}</Text>
                            </Table.Cell>

                            <Table.Cell justify={'center'}>
                                <Badge color='yellow' size={'3'} radius='full'>
                                    <Flex justify={'center'} align={'center'} gap={'2'}>
                                        <img src={shareInfoCoin} width={'25px'} height={'25px'} />
                                        {item.total_perks}
                                    </Flex>
                                </Badge>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    );
};