import {
    Text,
    Card,
    Flex,
    Grid,
    Badge,
    Heading,
    Button,
    Dialog,
    IconButton,
    Avatar,
    TextField,
    TextArea,
    Popover,
    AlertDialog
} from '@radix-ui/themes';
import { IconRoute2, IconPencil, IconTrash, IconPlus, IconLink } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import { useGetProcessQuery } from '../../../../../../redux/api-services/practiceApi';

export const TaskRoadMap = () => {
    const { id } = useParams();
    const { data } = useGetProcessQuery(id);

    console.log(data);

    return (
        <div>
            <Flex align={'center'} justify={'between'} mt={'6'}>
                <Heading>Roadmap</Heading>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <Button variant='surface' color='gray'>
                            <IconPlus size={16} /> Add New
                        </Button>
                    </Dialog.Trigger>
                    <Dialog.Content>
                        <ProcessDetailsDialog />
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>

            <Grid mt={'4'} columns={{ initial: '1', md: '2' }} gap={'5'} width='auto'>
                <Card>
                    <Flex p={'4'} direction={'column'} gap={'4'}>
                        <Flex justify={'between'}>
                            <Badge
                                color='yellow'
                                variant='surface'
                                radius='full'
                                style={{ width: 'fit-content' }}>
                                <Flex p={'1'} gap={'2'} align={'center'}>
                                    <IconRoute2 size={'15'} />1
                                </Flex>
                            </Badge>

                            <Flex justify='end' gap='2'>
                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <IconButton variant='soft'>
                                            <IconPencil size={16} />
                                        </IconButton>
                                    </Dialog.Trigger>
                                    <Dialog.Content>
                                        <ProcessDetailsDialog />
                                    </Dialog.Content>
                                </Dialog.Root>

                                <AlertDialog.Root>
                                    <AlertDialog.Trigger>
                                        <IconButton color='red' variant='soft'>
                                            <IconTrash size={16} />
                                        </IconButton>
                                    </AlertDialog.Trigger>
                                    <AlertDialog.Content maxWidth='450px'>
                                        <AlertDialog.Title>
                                            Delete this Roadmap Process
                                        </AlertDialog.Title>
                                        <AlertDialog.Description size='2'>
                                            Are you sure you want to delete this process? This action
                                            cannot be undone.
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
                            </Flex>
                        </Flex>

                        <Text size={'3'} weight={'bold'}>
                            Make necessary changes based on testing results
                        </Text>
                        <Text color='gray'>
                            Conduct usability testing: Gather feedback from users to identify
                            potential issues and areas for improvement. Iterate on your designs:
                            Make necessary changes based on testing results and your own insights.
                            Strive for continuous improvement: Aim to create an app that is both
                            visually appealing and user-friendly.
                        </Text>

                        <Flex wrap={'wrap'} gap={'2'}>
                            <Card>
                                <Flex justify={'between'} align={'center'} gap={'3'}>
                                    <Flex align={'center'} gap={'3'}>
                                        <Avatar
                                            size={'5'}
                                            src='https://i.pinimg.com/474x/e0/84/15/e08415c5c6e9c2d74db1a7753ea7cf67.jpg'
                                            fallback='A'
                                        />
                                        <Flex direction={'column'} gap={'2'}>
                                            <Text>Something Label</Text>
                                            <Badge
                                                color='gray'
                                                radius='medium'
                                                variant='surface'
                                                size={'2'}>
                                                <Flex align={'center'} justify={'center'} gap={'2'}>
                                                    <IconLink size={'15'} />
                                                    <Flex direction={'column'}>
                                                        <Text>https://tabler.io/icons</Text>
                                                    </Flex>
                                                </Flex>
                                            </Badge>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Card>

                            <Card>
                                <Flex justify={'between'} align={'center'} gap={'3'}>
                                    <Flex align={'center'} gap={'3'}>
                                        <Avatar
                                            size={'5'}
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVIL5HpOsOFQWomhpmB5b8lTVQ9rIVnV9fg&s'
                                            fallback='A'
                                        />
                                        <Flex direction={'column'} gap={'2'}>
                                            <Text>Something Label</Text>
                                            <Badge
                                                color='gray'
                                                radius='medium'
                                                variant='surface'
                                                size={'2'}>
                                                <Flex align={'center'} justify={'center'} gap={'2'}>
                                                    <IconLink size={'15'} />
                                                    <Flex direction={'column'}>
                                                        <Text>https://tabler.io/icons</Text>
                                                    </Flex>
                                                </Flex>
                                            </Badge>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Card>
                        </Flex>
                    </Flex>
                </Card>
            </Grid>
        </div>
    );
};

export const ProcessDetailsDialog = () => {
    return (
        <div>
            <Flex width={'100%'} direction={'column'} gap={'6'}>
                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Process Title</Text>
                    <TextField.Root
                        size={'3'}
                        value={'Gather feedback from users to identify potential'}
                        placeholder=''
                    />
                </Flex>
                <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                    <Text size={'2'}>Description</Text>
                    <TextArea
                        value='Conduct usability testing: Gather feedback from users to identify potential issues and areas for improvement. Iterate on your designs: Make necessary changes based on testing results and your own insights. Strive for continuous improvement: Aim to create an app that is both visually appealing and user-friendly.
                    '
                        resize='vertical'
                        size={'3'}
                        placeholder=''
                    />
                </Flex>

                <Flex
                    flexGrow={'1'}
                    direction={'row'}
                    align={'center'}
                    justify={'between'}
                    gap={'1'}>
                    <Text weight={'bold'} size={'4'}>
                        URL Fields
                    </Text>
                    <Popover.Root>
                        <Popover.Trigger>
                            <Button variant='surface' color='gray'>
                                <IconPlus size={16} /> Add New
                            </Button>
                        </Popover.Trigger>
                        <Popover.Content width='360px'>
                            <UrlFieldDialog />
                        </Popover.Content>
                    </Popover.Root>
                </Flex>

                <Flex mt={'-3'} direction={'column'} gap={'2'}>
                    <Card>
                        <Flex justify={'between'} align={'center'} gap={'3'}>
                            <Flex align={'center'} gap={'3'}>
                                <Avatar
                                    size={'5'}
                                    src='https://i.pinimg.com/474x/e0/84/15/e08415c5c6e9c2d74db1a7753ea7cf67.jpg'
                                    fallback='A'
                                />
                                <Flex direction={'column'} gap={'2'}>
                                    <Text>Something Label</Text>
                                    <Badge
                                        color='gray'
                                        radius='medium'
                                        variant='surface'
                                        size={'2'}>
                                        <Flex align={'center'} justify={'center'} gap={'2'}>
                                            <IconLink size={'15'} />
                                            <Flex direction={'column'}>
                                                <Text>https://tabler.io/icons</Text>
                                            </Flex>
                                        </Flex>
                                    </Badge>
                                </Flex>
                            </Flex>

                            <Flex justify='end' gap='2'>
                                <Popover.Root>
                                    <Popover.Trigger>
                                        <IconButton variant='soft'>
                                            <IconPencil size={16} />
                                        </IconButton>
                                    </Popover.Trigger>
                                    <Popover.Content width='360px'>
                                        <UrlFieldDialog />
                                    </Popover.Content>
                                </Popover.Root>
                                <IconButton color='red' variant='soft'>
                                    <IconTrash size={16} />
                                </IconButton>
                            </Flex>
                        </Flex>
                    </Card>
                    <Card>
                        <Flex justify={'between'} align={'center'} gap={'3'}>
                            <Flex align={'center'} gap={'3'}>
                                <Avatar
                                    size={'5'}
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVIL5HpOsOFQWomhpmB5b8lTVQ9rIVnV9fg&s'
                                    fallback='A'
                                />
                                <Flex direction={'column'} gap={'2'}>
                                    <Text>Something Label</Text>
                                    <Badge
                                        color='gray'
                                        radius='medium'
                                        variant='surface'
                                        size={'2'}>
                                        <Flex align={'center'} justify={'center'} gap={'2'}>
                                            <IconLink size={'15'} />
                                            <Flex direction={'column'}>
                                                <Text>https://tabler.io/icons</Text>
                                            </Flex>
                                        </Flex>
                                    </Badge>
                                </Flex>
                            </Flex>

                            <Flex justify='end' gap='2'>
                                <Popover.Root>
                                    <Popover.Trigger>
                                        <IconButton variant='soft'>
                                            <IconPencil size={16} />
                                        </IconButton>
                                    </Popover.Trigger>
                                    <Popover.Content width='360px'>
                                        <UrlFieldDialog />
                                    </Popover.Content>
                                </Popover.Root>

                                <IconButton color='red' variant='soft'>
                                    <IconTrash size={16} />
                                </IconButton>
                            </Flex>
                        </Flex>
                    </Card>
                </Flex>

                <Flex justify={'end'} gap={'3'}>
                    <Button color='green' radius='large' size={'3'}>
                        Save
                    </Button>
                </Flex>
            </Flex>
        </div>
    );
};

export const UrlFieldDialog = () => {
    return (
        <div>
            <Flex width={'100%'} direction={'column'} gap={'4'}>
                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Label for URL</Text>
                    <TextField.Root size={'3'} placeholder='' />
                </Flex>

                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>URL</Text>
                    <TextField.Root size={'3'} placeholder='' />
                </Flex>

                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Icon Image for URL</Text>
                    <TextField.Root size={'3'} placeholder='Upload icon' />
                </Flex>

                <Flex justify={'end'} gap={'3'}>
                    <Button color='green' radius='large' size={'3'}>
                        Add
                    </Button>
                </Flex>
            </Flex>
        </div>
    );
};
