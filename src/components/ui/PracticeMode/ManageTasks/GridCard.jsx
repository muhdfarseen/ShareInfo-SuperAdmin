import { Box, Grid, Text, Flex, Badge } from '@radix-ui/themes';
import { Card } from '@radix-ui/themes';
import shareInfoCoin from '../../../../assets/Images/ShareInfocoin.svg';
import classes from './GridCard.module.css';
import { useNavigate } from 'react-router-dom';

const categoryColors = {
    'Provlem Solving': 'green',
    Fulltime: 'violet',
    Design: 'orange',
    Coding: 'blue'
};

export const GridCard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Grid my={'6'} columns={{ initial: '1', sm: '2', md: '3' }} gap='6' width='auto'>
                {cardData.map((item) => (
                    <Card
                        onClick={() => navigate('/dashboard/managetask')}
                        key={item.title}
                        className={classes.cardhover}>
                        <Flex
                            height={'100%'}
                            width={'100%'}
                            justify={'between'}
                            p={'3'}
                            direction={'column'}
                            gap={'3'}>
                            <Box>
                                <Flex width={'100%'} justify={'between'}>
                                    <Text weight={'bold'} size={'3'}>
                                        {item.title}
                                    </Text>
                                    <Badge size={'2'} radius='full' color='yellow'>
                                        <Flex justify={'center'} align={'center'} gap={'2'}>
                                            <img
                                                src={shareInfoCoin}
                                                width={'20px'}
                                                height={'20px'}
                                            />
                                            <Text weight={'bold'}> {item.perks}</Text>
                                        </Flex>
                                    </Badge>
                                </Flex>

                                <Flex mt={'2'} wrap={'wrap'} gap={'2'}>
                                    <Badge
                                        color={categoryColors[item.category] || 'gray'}
                                        style={{ width: 'fit-content', height: '28px' }}
                                        size={'2'}
                                        radius='full'>
                                        <Flex justify={'center'} align={'center'} gap={'2'}>
                                            <Text>{item.category}</Text>
                                        </Flex>
                                    </Badge>
                                    {/* <Badge
                                        color='gray'
                                        style={{ width: 'fit-content', height: '28px' }}
                                        size={'2'}
                                        radius='full'>
                                        <Flex justify={'center'} align={'center'} gap={'2'}>
                                            <Text>Process : {item.process}</Text>
                                        </Flex>
                                    </Badge> */}
                                    <Badge size={'2'} color='gray' radius='full'>
                                        <Flex gap={'1'}>
                                            <Text> Submissions Approved :</Text>
                                            <Flex>
                                                <Text color='green' weight={'bold'}>
                                                    15
                                                </Text>
                                                <Text>/23</Text>
                                            </Flex>
                                        </Flex>
                                    </Badge>
                                </Flex>
                            </Box>
                            <Flex
                                wrap={'wrap'}
                                gap={'2'}
                                mt={'4'}
                                width={'100%'}
                                justify={'between'}>
                                <Flex gap={'1'}>
                                    <Text size='1' color='gray'>
                                        Posted on
                                    </Text>
                                    <Text size='1' color='white' weight={'bold'}>
                                        {item.dateposted}
                                    </Text>
                                </Flex>

                                <Flex gap={'1'}>
                                    <Text size='1' color='gray'>
                                        Last updated on
                                    </Text>
                                    <Text size='1' color='white' weight={'bold'}>
                                        {item.updated}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Card>
                ))}
            </Grid>
        </div>
    );
};

const cardData = [
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
