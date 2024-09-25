import { Table, RadioCards, Flex, IconButton, Text, Badge, Avatar, Box } from '@radix-ui/themes';
import {
    IconClockHour3,
    IconCircleCheck,
    IconAlertCircle,
    IconCircleDashedCheck,
    IconEye
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export const SubmissionTable = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Box style={{ padding: '30px 0px 0px 0px', width: '100%' }} width={'100%'}>
                <Flex>
                    <RadioCards.Root
                        variant='classic'
                        defaultValue='1'
                        columns={{ initial: '1', sm: '4' }}>
                        <RadioCards.Item value='1'>
                            <Flex align={'center'} gap={'2'} width='100%'>
                                <IconButton size='1' variant='ghost'>
                                    <IconClockHour3 />
                                </IconButton>
                                <Text size={'3'} weight='bold'>
                                    Recent
                                </Text>
                            </Flex>
                        </RadioCards.Item>

                        <RadioCards.Item value='2'>
                            <Flex align={'center'} gap={'2'} width='100%'>
                                <IconButton color='yellow' size='1' variant='ghost'>
                                    <IconCircleDashedCheck />
                                </IconButton>
                                <Text size={'3'} weight='bold'>
                                    Reviewed
                                </Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value='3'>
                            <Flex align={'center'} gap={'2'} width='100%'>
                                <IconButton color='red' size='1' variant='ghost'>
                                    <IconAlertCircle />
                                </IconButton>
                                <Text size={'3'} weight='bold'>
                                    Pending
                                </Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value='4'>
                            <Flex align={'center'} gap={'2'} width='100%'>
                                <IconButton color='green' size='1' variant='ghost'>
                                    <IconCircleCheck />
                                </IconButton>
                                <Text size={'3'} weight='bold'>
                                    Approved
                                </Text>
                            </Flex>
                        </RadioCards.Item>
                    </RadioCards.Root>
                </Flex>

                <Table.Root mt={'6'} variant='ghost'>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell justify={'center'}></Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell justify={'center'}>
                                Category
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell justify={'center'}>
                                Submited on
                            </Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell justify={'center'}>
                                Action
                            </Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tableData.map((item, index) => (
                            <>
                                <Table.Row justify={'center'} align='center'>
                                    <Table.Cell justify={'center'}>
                                        <Text weight={'bold'} size={'2'}>
                                            {index + 1}
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
                                        <IconButton
                                            onClick={() => navigate('/dashboard/submission')}
                                            color='gray'
                                            variant='ghost'>
                                            <IconEye />
                                        </IconButton>
                                    </Table.Cell>
                                </Table.Row>
                            </>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Box>
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
