import { Table, Box, IconButton, Text, Badge, Flex } from '@radix-ui/themes';
import { IconPencil } from '@tabler/icons-react';
import shareInfoCoin from '../../../../assets/Images/ShareInfocoin.svg';

const categoryColors = {
    'Provlem Solving': 'green',
    Fulltime: 'blue',
    Design: 'orange',
    Coding: 'violet'
};

export const TaskTable = () => {
    return (
        <Box py={'6'}>
            <Table.Root variant='ghost'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Tasks</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Perks</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell justify={'center'}>Process</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell justify={'center'}>
                            Date Posted
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell justify={'center'}>
                            {' '}
                            Last Updated
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {tableData.map((task) => (
                        <Table.Row key={task.title} align={'center'}>
                            <Table.RowHeaderCell>
                                <Text size={'3'}>{task.title}</Text>
                            </Table.RowHeaderCell>
                            <Table.Cell>
                                <Badge size={'2'} radius='full' color='yellow'>
                                    <Flex justify={'center'} align={'center'} gap={'2'}>
                                        <img src={shareInfoCoin} width={'20px'} height={'20px'} />
                                        <Text weight={'bold'}> {task.perks}</Text>
                                    </Flex>
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge
                                    size={'2'}
                                    radius='full'
                                    color={categoryColors[task.category] || 'gray'}>
                                    {task.category}
                                </Badge>
                            </Table.Cell>
                            <Table.Cell justify={'center'}>
                                <Text size={'3'}>{task.process}</Text>
                            </Table.Cell>

                            <Table.Cell justify={'center'}>{task.dateposted}</Table.Cell>
                            <Table.Cell justify={'center'}>{task.updated}</Table.Cell>
                            <Table.Cell>
                                <IconButton size={'1'} color='gray' variant='soft'>
                                    <IconPencil width='18' height='18' />
                                </IconButton>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Box>
    );
};
const tableData = [
    {
        title: 'Mastering UI/UX Design Fundamentals ',
        updated: '2024-09-03',
        perks: '323',
        process: '3',
        category: 'Provlem Solving',
        dateposted: '2024-08-25'
    },
    {
        title: 'The Essential UI/UX Design Roadmap',
        updated: '2024-09-03',
        perks: '355',
        process: '3',
        category: 'Coding',
        dateposted: '2024-09-01'
    },
    {
        title: 'Core Concepts in UI/UX Design',
        updated: '2024-09-03',
        perks: '323',
        process: '3',
        category: 'Coding',
        dateposted: '2024-07-15'
    },
    {
        title: 'Exploring Graphic Design Principles',
        updated: '2024-09-03',
        perks: '344',
        process: '3',
        category: 'Design',
        dateposted: '2024-06-30'
    },
    {
        title: 'Data Science: The Road to Mastery',
        updated: '2024-09-03',
        perks: '687',
        process: '3',
        category: 'Coding',
        dateposted: '2024-09-03'
    },
    {
        title: 'Problem Solving for Software Engineers',
        updated: '2024-09-03',
        perks: '123',
        process: '3',
        category: 'Provlem Solving',
        dateposted: '2024-08-25'
    },
    {
        title: 'Building Expertise in Frontend Development',
        updated: '2024-09-03',
        perks: '245',
        process: '3',
        category: 'Coding',
        dateposted: '2024-09-01'
    },
    {
        title: 'Becoming a Product Manager: A Step-by-Step Guide',
        updated: '2024-09-03',
        perks: '523',
        process: '3',
        category: 'Coding',
        dateposted: '2024-07-15'
    },
    {
        title: 'Advanced Problem Solving for Software Engineers ',
        updated: '2024-09-03',
        perks: '323',
        process: '3',
        category: 'Provlem Solving',
        dateposted: '2024-08-25'
    },
    {
        title: 'Frontend Development Essentials',
        updated: '2024-09-03',
        perks: '355',
        process: '3',
        category: 'Coding',
        dateposted: '2024-09-01'
    },
    {
        title: 'Product Management Strategies',
        updated: '2024-09-03',
        perks: '323',
        process: '3',
        category: 'Coding',
        dateposted: '2024-07-15'
    },
    {
        title: 'The World of Graphic Design',
        updated: '2024-09-03',
        perks: '344',
        process: '3',
        category: 'Design',
        dateposted: '2024-06-30'
    },
    {
        title: 'Data Science Career Path',
        updated: '2024-09-03',
        perks: '687',
        process: '3',
        category: 'Coding',
        dateposted: '2024-09-03'
    },
    {
        title: 'Essential Skills for Software Engineers',
        updated: '2024-09-03',
        perks: '123',
        process: '3',
        category: 'Provlem Solving',
        dateposted: '2024-08-25'
    },
    {
        title: 'Mastering Frontend Development',
        updated: '2024-09-03',
        perks: '245',
        process: '3',
        category: 'Coding',
        dateposted: '2024-09-01'
    },
    {
        title: 'Product Management: A Comprehensive Overview',
        updated: '2024-09-03',
        perks: '523',
        process: '3',
        category: 'Coding',
        dateposted: '2024-07-15'
    }
];
