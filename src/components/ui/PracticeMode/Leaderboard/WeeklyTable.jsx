import { Table, Flex, Text, Badge, Avatar } from '@radix-ui/themes';
import shareInfoCoin from '../../../../assets/Images/ShareInfocoin.svg';

export const WeeklyTable = () => {
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
        name: 'Liam Taylor',
        profile:
            'https://images.unsplash.com/photo-1520975919172-52b4e0d0b138?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
        type: 'Student',
        score: '598'
    },
    {
        rank: '2',
        name: 'Sophia Evans',
        profile:
            'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.4&fp-z=1&fit=crop',
        type: 'Student',
        score: '550'
    },
    {
        rank: '3',
        name: 'Noah Walker',
        profile:
            'https://images.unsplash.com/photo-1552058544-f2b08422138a?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.35&fp-z=1&fit=crop',
        type: 'Student',
        score: '542'
    },
    {
        rank: '4',
        name: 'Mia Anderson',
        profile:
            'https://images.unsplash.com/photo-1594824476960-b3e32f7b6bc0?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.25&fp-z=1&fit=crop',
        type: 'Student',
        score: '530'
    },
    {
        rank: '5',
        name: 'Jackson Harris',
        profile:
            'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
        type: 'Student',
        score: '527'
    },
    {
        rank: '6',
        name: 'Olivia Clark',
        profile:
            'https://images.unsplash.com/photo-1589571894960-20bbe2828a34?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.35&fp-z=1&fit=crop',
        type: 'Student',
        score: '525'
    },
    {
        rank: '7',
        name: 'Benjamin Lewis',
        profile:
            'https://images.unsplash.com/photo-1573495612937-6fc531453222?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.2&fp-z=1&fit=crop',
        type: 'Student',
        score: '512'
    },
    {
        rank: '8',
        name: 'Ava Allen',
        profile:
            'https://images.unsplash.com/photo-1595152772835-219674b2a8a0?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
        type: 'Student',
        score: '509'
    },
    {
        rank: '9',
        name: 'Elijah King',
        profile:
            'https://images.unsplash.com/photo-1603415526960-7c6a3b91e5c7?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.4&fp-z=1&fit=crop',
        type: 'Student',
        score: '487'
    },
    {
        rank: '10',
        name: 'Isabella Scott',
        profile:
            'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.35&fp-z=1&fit=crop',
        type: 'Student',
        score: '482'
    }
];
