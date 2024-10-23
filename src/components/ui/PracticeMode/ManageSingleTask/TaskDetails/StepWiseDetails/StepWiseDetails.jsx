import { useState } from 'react';
import { toast } from 'sonner';
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
    Grid,
    Spinner,
    Callout,
    AlertDialog
} from '@radix-ui/themes';
import {
    IconTimeline,
    IconPencil,
    IconTrash,
    IconPlus,
    IconAlertTriangle
} from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import {
    useAddStepMutation,
    useDeleteStepMutation,
    useGetStepsQuery,
    useUpdateStepMutation
} from '../../../../../../redux/api-services/practiceApi';

export const StepWiseDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error, refetch } = useGetStepsQuery(id);

    const [addStep] = useAddStepMutation();
    const [updateStep] = useUpdateStepMutation();
    const [deleteStep] = useDeleteStepMutation();

    const handleAddStep = async (stepData) => {
        const toastId = toast.loading('Step adding...');
        try {
            await addStep({ practiceId: id, stepData }).unwrap();
            refetch();
            toast.success('Step added successfully!', { id: toastId });
        } catch (err) {
            toast.error('Failed to add step: ' + err.message, { id: toastId });
            console.error('Failed to add step:', err);
        }
    };

    const handleUpdateStep = async (stepsId, stepData) => {
        const toastId = toast.loading('Step updating...');
        try {
            await updateStep({ stepsId, stepData }).unwrap();
            refetch();
            toast.success('Step updated successfully!', { id: toastId });
        } catch (err) {
            toast.error('Failed to update step: ' + err.message, { id: toastId });
            console.error('Failed to update step:', err);
        }
    };

    const handleDeleteStep = async (stepsId) => {
        const toastId = toast.loading('Step deleting...');
        try {
            await deleteStep(stepsId).unwrap();
            refetch();
            toast.success('Step deleted successfully!', { id: toastId });
        } catch (err) {
            toast.error('Failed to delete step: ' + err.message, { id: toastId });
            console.error('Failed to delete step:', err);
        }
    };

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
                            <StepDetailsDialog onSave={handleAddStep} />
                        </Dialog.Content>
                    </Dialog.Root>
                </Flex>
            </Flex>

            {isLoading ?
                <Flex align={'center'} justify={'center'} height={'300px'}>
                    <Spinner size='3' />
                </Flex>
            : data ?
                <Grid mt={'4'} columns={{ initial: '1', md: '2' }} gap={'5'} width='auto'>
                    {data?.map((item, index) => (
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
                                        <Dialog.Root>
                                            <Dialog.Trigger asChild>
                                                <IconButton variant='soft'>
                                                    <IconPencil size={16} />
                                                </IconButton>
                                            </Dialog.Trigger>
                                            <Dialog.Content>
                                                <StepDetailsDialog
                                                    stepData={item}
                                                    onSave={handleUpdateStep}
                                                />
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
                                                    Delete Practice Step
                                                </AlertDialog.Title>
                                                <AlertDialog.Description size='2'>
                                                    Are you sure you want to delete this task? This
                                                    action cannot be undone, and all associated data
                                                    with this step will be removed.
                                                </AlertDialog.Description>

                                                <Flex gap='3' mt='4' justify='end'>
                                                    <AlertDialog.Cancel>
                                                        <Button variant='soft' color='gray'>
                                                            Cancel
                                                        </Button>
                                                    </AlertDialog.Cancel>
                                                    <AlertDialog.Action>
                                                        <Button
                                                            onClick={() =>
                                                                handleDeleteStep(item.steps_id)
                                                            }
                                                            variant='solid'
                                                            color='red'>
                                                            Delete
                                                        </Button>
                                                    </AlertDialog.Action>
                                                </Flex>
                                            </AlertDialog.Content>
                                        </AlertDialog.Root>
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
            :   <Flex align={'center'} justify={'center'} height={'300px'}>
                    <Callout.Root variant='surface' color='red'>
                        <Callout.Icon>
                            <IconAlertTriangle stroke={1} />
                        </Callout.Icon>
                        <Callout.Text>Error: {error.error}</Callout.Text>
                    </Callout.Root>
                </Flex>
            }
        </div>
    );
};

export const StepDetailsDialog = ({ onSave, stepData }) => {
    const [stepName, setStepName] = useState(stepData?.step_name || '');

    const [stepDescription, setStepDescription] = useState(
        Array.isArray(stepData?.step_description) ? stepData.step_description.join('\n') : ''
    );

    const handleSave = () => {
        const newStepData = {
            step_name: stepName,
            step_description: stepDescription.split('\n')
        };
        stepData ? onSave(stepData.steps_id, newStepData) : onSave(newStepData);
    };

    return (
        <div>
            <Flex width={'100%'} direction={'column'} gap={'6'}>
                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Step Title</Text>
                    <TextField.Root
                        size={'3'}
                        placeholder='Step Name'
                        value={stepName}
                        onChange={(e) => setStepName(e.target.value)}
                    />
                </Flex>
                <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                    <Text size={'2'}>Description (Enter each point on a new line)</Text>
                    <TextArea
                        resize='vertical'
                        size={'3'}
                        placeholder='Enter each point on a new line'
                        value={stepDescription}
                        onChange={(e) => setStepDescription(e.target.value)}
                    />
                </Flex>
                <Flex justify={'end'} gap={'3'}>
                    <Dialog.Close>
                        <Button radius='large' size={'3'} onClick={handleSave}>
                            Save
                        </Button>
                    </Dialog.Close>
                </Flex>
            </Flex>
        </div>
    );
};
