import {
    Text,
    Card,
    Flex,
    Badge,
    Heading,
    Button,
    Dialog,
    IconButton,
    TextArea,
    TextField,
    Grid
} from '@radix-ui/themes';
import { IconTimeline, IconPencil, IconTrash, IconPlus } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import { useGetPracticeAboutAndStepsQuery } from '../../../../../../redux/api-services/practiceApi';

export const StepWiseDetails = () => {
    const { id } = useParams();
    const { data } = useGetPracticeAboutAndStepsQuery(id);

    return (
        <div>
            <Flex align='center' justify='between' mt='6'>
                <Heading>Steps</Heading>
                <Flex gap={'2'}>
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <Button variant='surface' color='gray'>
                                <IconPlus size={16} /> Add New Step
                            </Button>
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <StepDetailsDialog />
                        </Dialog.Content>
                    </Dialog.Root>
                </Flex>
            </Flex>

            <Grid mt={'4'} columns={{ initial: '1', md: '2' }} gap={'5'} width='auto'>
                {data?.steps?.map((item, index) => (
                    <Card key={item.step_name}>
                        <Flex key={item.steps_id} p='4' direction='column' gap='4'>
                            <Flex justify={'between'}>
                                <Badge
                                    style={{ width: 'fit-content' }}
                                    variant='surface'
                                    radius='full'>
                                    <Flex p='1' gap='2' align='center'>
                                        <IconTimeline size='15' />
                                        {index + 1}
                                    </Flex>
                                </Badge>
                                <Flex gap='2'>
                                    <IconButton variant='soft'>
                                        <IconPencil size={16} />
                                    </IconButton>
                                    <IconButton color='red' variant='soft'>
                                        <IconTrash size={16} />
                                    </IconButton>
                                </Flex>
                            </Flex>

                            <Text size='3' weight='bold'>
                                {item.step_name}
                            </Text>
                            {item.step_description.map((item) => (
                                <Text key={item} color='gray'>
                                    {item}
                                </Text>
                            ))}
                        </Flex>
                    </Card>
                ))}
            </Grid>
        </div>
    );
};

export const StepDetailsDialog = () => {
    return (
        <div>
            <Flex width={'100%'} direction={'column'} gap={'6'}>
                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Step Title</Text>
                    <TextField.Root size={'3'} placeholder='' />
                </Flex>
                <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                    <Text size={'2'}>Description</Text>
                    <TextArea resize='vertical' size={'3'} placeholder='' />
                </Flex>
                <Flex justify={'end'} gap={'3'}>
                    <Button radius='large' size={'3'}>
                        Save
                    </Button>
                </Flex>
            </Flex>
        </div>
    );
};
