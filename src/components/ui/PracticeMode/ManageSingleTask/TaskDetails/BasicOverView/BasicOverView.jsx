import {
    Grid,
    Text,
    Flex,
    Badge,
    Button,
    Dialog,
    Spinner,
    Box,
    Callout,
    IconButton,
    DropdownMenu,
    AlertDialog,
    Card,
    AspectRatio
} from '@radix-ui/themes';
import shareInfoCoin from '../../../../../../assets/Images/ShareInfocoin.svg';
import { IconAlertTriangle, IconDotsVertical, IconPencil, IconTrash } from '@tabler/icons-react';
import { EditAboutForm } from './EditAboutForm';
import { useGetPracticeQuery } from '../../../../../../redux/api-services/practiceApi';
import { useParams } from 'react-router-dom';

export const BasicOverView = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetPracticeQuery(id);

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
            <Grid mt='6' columns={{ initial: '1', md: '2' }} gap={'3'} width='auto'>
                <Box>
                    <Card>
                        <Flex p={'3'} direction={'column'} gap={'3'}>
                            {data.banner_image != '' && (
                                <AspectRatio ratio={16 / 9}>
                                    <img
                                        style={{
                                            borderRadius: '5px',
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                        src={data?.banner_image}
                                    />
                                </AspectRatio>
                            )}

                            <Flex gap={'3'} justify={'between'}>
                                <Flex gap={'3'} direction={'column'}>
                                    <Text size={'5'} weight={'bold'}>
                                        {data?.practice_task}
                                    </Text>
                                    <Flex wrap={'wrap'} gap={'2'}>
                                        <Badge radius='full' size={'3'} color='yellow'>
                                            <img
                                                src={shareInfoCoin}
                                                width={'20px'}
                                                height={'20px'}
                                            />
                                            <Text color='yellow' weight={'bold'}>
                                                {data?.perks}
                                            </Text>
                                        </Badge>

                                        <Badge
                                            size={'3'}
                                            color={data?.category_color}
                                            variant='soft'
                                            radius='full'>
                                            {data?.category}
                                        </Badge>
                                        {data?.sub_categories?.map((item) => (
                                            <Badge
                                                size={'3'}
                                                key={item}
                                                color='gray'
                                                variant='soft'
                                                radius='full'>
                                                {item}
                                            </Badge>
                                        ))}
                                    </Flex>
                                </Flex>

                                <Dialog.Root>
                                    <AlertDialog.Root>
                                        <DropdownMenu.Root>
                                            <DropdownMenu.Trigger>
                                                <IconButton size={'1'} color='gray' variant='soft'>
                                                    <IconDotsVertical width='18' height='18' />
                                                </IconButton>
                                            </DropdownMenu.Trigger>
                                            <DropdownMenu.Content
                                                sideOffset={10}
                                                align='end'
                                                color='gray'
                                                variant='soft'
                                                side='top'
                                                size='2'>
                                                <Dialog.Trigger>
                                                    <DropdownMenu.Item>
                                                        <Flex
                                                            width={'120px'}
                                                            align={'center'}
                                                            justify={'between'}>
                                                            Edit <IconPencil size={15} />
                                                        </Flex>
                                                    </DropdownMenu.Item>
                                                </Dialog.Trigger>
                                                <AlertDialog.Trigger>
                                                    <DropdownMenu.Item variant='solid' color='red'>
                                                        <Flex
                                                            width={'120px'}
                                                            align={'center'}
                                                            justify={'between'}>
                                                            Delete <IconTrash size={15} />
                                                        </Flex>
                                                    </DropdownMenu.Item>
                                                </AlertDialog.Trigger>
                                            </DropdownMenu.Content>
                                        </DropdownMenu.Root>
                                        <Dialog.Content maxWidth={'60vw'} size='4'>
                                            <EditAboutForm />
                                        </Dialog.Content>
                                        <AlertDialog.Content maxWidth='450px'>
                                            <AlertDialog.Title>
                                                Delete Practice Task
                                            </AlertDialog.Title>
                                            <AlertDialog.Description size='2'>
                                                Are you sure you want to delete this task? This
                                                action cannot be undone, and all associated data
                                                with this task will be removed.
                                            </AlertDialog.Description>

                                            <Flex gap='3' mt='4' justify='end'>
                                                <AlertDialog.Cancel>
                                                    <Button variant='soft' color='gray'>
                                                        Cancel
                                                    </Button>
                                                </AlertDialog.Cancel>
                                                <AlertDialog.Action>
                                                    <Button variant='solid' color='red'>
                                                        Delete
                                                    </Button>
                                                </AlertDialog.Action>
                                            </Flex>
                                        </AlertDialog.Content>
                                    </AlertDialog.Root>
                                </Dialog.Root>
                            </Flex>
                        </Flex>
                    </Card>
                </Box>

                <Flex direction={'column'} gap={'5'} p={'3'}>
                    <Flex direction={'column'}>
                        <Text color='gray' size={'2'}>
                            Description
                        </Text>
                        <Text>{data?.description}</Text>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text color='gray' size={'2'}>
                            Deadline
                        </Text>
                        <Text weight={'bold'} color='red' size={'4'}>
                            {data?.deadline}
                        </Text>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text color='gray' size={'2'}>
                            Objective
                        </Text>
                        <Text>{data?.objective}</Text>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text color='gray' size={'2'}>
                            Assessment Overview
                        </Text>
                        <Text>{data?.overview}</Text>
                    </Flex>
                </Flex>
            </Grid>
        </div>
    );
};
