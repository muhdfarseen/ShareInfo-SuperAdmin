import {
    Grid,
    Text,
    Flex,
    Badge,
    Card,
    Heading,
    Button,
    Dialog,
    Spinner,
    Callout
} from '@radix-ui/themes';
import shareInfoCoin from '../../../../../../assets/Images/ShareInfocoin.svg';
import { IconAlertTriangle, IconPencil } from '@tabler/icons-react';
import { EditAboutForm } from './EditAboutForm';
import { useGetPracticeAboutAndStepsQuery } from '../../../../../../redux/api-services/practiceApi';
import { useParams } from 'react-router-dom';

export const BasicOverView = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetPracticeAboutAndStepsQuery(id);

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

    return (
        <div>
            <Flex width={'100%'} align={'center'} justify={'between'} mt={'6'}>
                <Heading>About</Heading>

                <Dialog.Root>
                    <Dialog.Trigger>
                        <Button variant='surface' color='gray'>
                            <IconPencil size={16} />
                            Edit
                        </Button>
                    </Dialog.Trigger>
                    <Dialog.Content maxWidth={'60vw'} size='4'>
                        <EditAboutForm />
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>

            <Grid mt={'4'} columns={{ initial: '1', md: '2' }} gap='4' width='auto'>
                <Card>
                    <Flex direction={'column'} gap={'3'} p={'4'}>
                        <img
                            style={{
                                objectFit: 'cover',
                                height: '200px',
                                width: 'auto',
                                borderRadius: '10px'
                            }}
                            src='https://plus.unsplash.com/premium_photo-1683133927528-8075b14131a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt=''
                        />

                        <Flex gap={'2'} justify={'between'}>
                            <Flex gap={'2'} direction={'column'}>
                                <Text size={'4'} weight={'bold'}>
                                    {data?.practice_task}
                                </Text>
                                <Flex wrap={'wrap'} gap={'2'}>
                                    <Badge
                                        color={data?.category_color}
                                        variant='soft'
                                        radius='full'>
                                        {data?.category}
                                    </Badge>
                                    {data?.sub_categories?.map((item) => (
                                        <Badge key={item} color='gray' variant='soft' radius='full'>
                                            {item}
                                        </Badge>
                                    ))}
                                </Flex>
                            </Flex>

                            <Flex justify={'center'} align={'center'} gap={'2'}>
                                <img src={shareInfoCoin} width={'30px'} height={'30px'} />
                                <Text color='yellow' size={'5'} weight={'bold'}>
                                    {data?.perks}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Card>
                <Card>
                    <Flex direction={'column'} gap={'2'} p={'4'}>
                        <Text color='gray' size={'2'}>
                            Description
                        </Text>

                        <Text>{data?.description}</Text>
                        <Flex align={'center'} gap={'2'}>
                            <Text color='gray' size={'2'}>
                                Deadline :
                            </Text>
                            <Text weight={'bold'} color='red' size={'4'}>
                                {data?.deadline}
                            </Text>
                        </Flex>
                    </Flex>
                </Card>
                <Card>
                    <Flex direction={'column'} gap={'2'} p={'4'}>
                        <Text color='gray' size={'2'}>
                            Objective
                        </Text>
                        <Text>{data?.objective}</Text>
                    </Flex>
                </Card>

                <Card>
                    <Flex direction={'column'} gap={'2'} p={'4'}>
                        <Text color='gray' size={'2'}>
                            Assessment Overview
                        </Text>

                        <Text>{data?.overview}</Text>
                    </Flex>
                </Card>
            </Grid>
        </div>
    );
};
