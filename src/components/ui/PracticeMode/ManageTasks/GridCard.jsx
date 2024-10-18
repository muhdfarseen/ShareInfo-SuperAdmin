import { Box, Grid, Text, Flex, Badge, Spinner, Callout } from '@radix-ui/themes';
import { Card } from '@radix-ui/themes';
import shareInfoCoin from '../../../../assets/Images/ShareInfocoin.svg';
import classes from './GridCard.module.css';
import { useNavigate } from 'react-router-dom';
import { useGetPracticeListQuery } from '../../../../redux/api-services/practiceApi';
import { IconAlertTriangle, IconCircleNumber0 } from '@tabler/icons-react';

export const GridCard = () => {
    const { data, error, isLoading } = useGetPracticeListQuery();
    const navigate = useNavigate();

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
                    <Callout.Text>No Practice Tasks added yet</Callout.Text>
                </Callout.Root>
            </Flex>
        );

    return (
        <div>
            <Grid my={'6'} columns={{ initial: '1', sm: '2', md: '3' }} gap='6' width='auto'>
                {data.map((item) => (
                    <Card
                        onClick={() => navigate('/dashboard/managetask')}
                        key={item.practice_id}
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
                                        {item.practice_task}
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
                                        style={{ width: 'fit-content', height: '28px' }}
                                        variant='surface'
                                        size={'2'}
                                        radius='full'>
                                        <Flex justify={'center'} align={'center'} gap={'2'}>
                                            <Text>{item.category}</Text>
                                        </Flex>
                                    </Badge>
                                    <Badge size={'2'} variant='outline' color='gray' radius='full'>
                                        <Flex gap={'1'}>
                                            <Text> Days left :</Text>
                                            <Text color='green' weight={'bold'}>
                                                {item.no_days_left}
                                            </Text>
                                        </Flex>
                                    </Badge>
                                    <Badge size={'2'} variant='outline' color='gray' radius='full'>
                                        <Flex gap={'1'}>
                                            <Text> Process :</Text>
                                            <Text color='green' weight={'bold'}>
                                                {item.no_of_process}
                                            </Text>
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
                                        Deadline
                                    </Text>
                                    <Text size='1' color='white' weight={'bold'}>
                                        {item.deadline}
                                    </Text>
                                </Flex>

                                <Flex gap={'1'}>
                                    <Text size='1' color='gray'>
                                        Last updated on
                                    </Text>
                                    <Text size='1' color='white' weight={'bold'}>
                                        {item.updated_date}
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
