import {
    Text,
    Card,
    Flex,
    Grid,
    Badge,
    Heading,
    Button,
    Dialog,
    IconButton
} from '@radix-ui/themes';
import { IconRoute2, IconPencil, IconTrash, IconPlus, IconLink } from '@tabler/icons-react';

export const TaskRoadMap = () => {
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
                    <Dialog.Content size='4'>
                        <>asd</>
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
                                <IconButton variant='soft'>
                                    <IconPencil size={16} />
                                </IconButton>
                                <IconButton color='red' variant='soft'>
                                    <IconTrash size={16} />
                                </IconButton>
                            </Flex>
                        </Flex>

                        <Text size={'3'} weight={'bold'}>
                            title here
                        </Text>
                        <Text color='gray'>desc here</Text>

                        <Flex align={'center'} gap={'3'}>
                            <Text size={'2'}>Required URL fields : </Text>

                            <Badge radius='full' variant='surface' size={'3'}>
                                <Flex justify={'center'} align={'center'} gap={'2'}>
                                    <IconLink size={'15'} />
                                    <Text>url</Text>
                                </Flex>
                            </Badge>
                        </Flex>
                    </Flex>
                </Card>
            </Grid>
        </div>
    );
};
