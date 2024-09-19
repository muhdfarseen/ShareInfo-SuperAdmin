import { Table, Flex, Text, Badge, Avatar } from '@radix-ui/themes';
import shareInfoCoin from '../../../../assets/Images/ShareInfocoin.svg';

export const MonthlyTable = () => {
    return (
        <div>
            <Table.Root variant='ghost'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell justify={'center'}>Rank</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell justify={'center'}>Category</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell justify={'center'}>
                            Last submission on
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell justify={'center'}>
                            Perks earned
                        </Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {tableData.map((item, index) => (
                        <>
                            <Table.Row justify={'center'} align='center'>
                                <Table.Cell justify={'center'}>
                                    <Text
                                        weight={'bold'}
                                        color={index < 3 ? 'green' : 'gray'}
                                        size={'2'}>
                                        {item.rank}
                                    </Text>
                                </Table.Cell>

                                <Table.RowHeaderCell>
                                    <Flex align={'center'} gap={'3'}>
                                        <Avatar
                                            src={item.profile}
                                            fallback={item.name.slice(0, 1)}
                                        />
                                        <Flex direction={'column'}>
                                            <Text size={'3'}>{item.name}</Text>
                                        </Flex>
                                    </Flex>
                                </Table.RowHeaderCell>

                                <Table.Cell justify={'center'}>
                                    <Badge
                                        size={'2'}
                                        radius='full'
                                        style={{ width: 'fit-content' }}>
                                        {item.type}
                                    </Badge>
                                </Table.Cell>

                                <Table.Cell justify={'center'}>
                                    <Text color='white'>01 Jan 2022</Text>
                                </Table.Cell>

                                <Table.Cell justify={'center'}>
                                    <Badge color='yellow' size={'3'} radius='full' prefix=''>
                                        <Flex justify={'center'} align={'center'} gap={'2'}>
                                            <img
                                                src={shareInfoCoin}
                                                width={'25px'}
                                                height={'25px'}
                                            />
                                            {item.score}
                                        </Flex>
                                    </Badge>
                                </Table.Cell>
                            </Table.Row>
                        </>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    );
};

const tableData = [
    {
        rank: '1',
        name: 'Jon Doe',
        profile:
            'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
        type: 'Student',
        score: '521'
    },
    {
        rank: '2',
        name: 'Jane Smith',
        profile:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.4&fp-z=1&fit=crop',
        type: 'Student',
        score: '428'
    },
    {
        rank: '3',
        name: 'Sam Johnson',
        profile:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.35&fp-z=1&fit=crop',
        type: 'Student',
        score: '417'
    },
    {
        rank: '4',
        name: 'Alice Williams',
        profile:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1&fit=crop',
        type: 'Student',
        score: '415'
    },
    {
        rank: '5',
        name: 'Michael Brown',
        profile:
            'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
        type: 'Student',
        score: '414'
    },
    {
        rank: '6',
        name: 'Emily Davis',
        profile:
            'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.35&fp-z=1&fit=crop',
        type: 'Student',
        score: '412'
    },
    {
        rank: '7',
        name: 'James Wilson',
        profile:
            'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1&fit=crop',
        type: 'Student',
        score: '401'
    },
    {
        rank: '8',
        name: 'Linda Martinez',
        profile:
            'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
        type: 'Student',
        score: '400'
    },
    {
        rank: '9',
        name: 'Robert Garcia',
        profile:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.4&fp-z=1&fit=crop',
        type: 'Student',
        score: '309'
    },
    {
        rank: '10',
        name: 'Patricia Lee',
        profile:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.35&fp-z=1&fit=crop',
        type: 'Student',
        score: '308'
    }
];
