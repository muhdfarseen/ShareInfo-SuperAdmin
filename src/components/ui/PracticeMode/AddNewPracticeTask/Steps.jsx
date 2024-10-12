import { useState } from 'react';
import {
    TextField,
    Text,
    Flex,
    Badge,
    TextArea,
    IconButton,
    Dialog,
    Button,
    Heading,
    Card
} from '@radix-ui/themes';
import { IconTimeline, IconPencil, IconTrash, IconPlus } from '@tabler/icons-react';

export const Steps = () => {
    const [steps, setSteps] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(null);

    const openModal = (step = null) => {
        setCurrentStep(step);
        setOpen(true);
    };

    const handleSaveStep = (newStep) => {
        if (currentStep) {
            // Edit existing step
            setSteps(steps.map((s) => (s.id === currentStep.id ? newStep : s)));
        } else {
            // Add new step
            setSteps([...steps, { ...newStep, id: steps.length + 1 }]);
        }
        setOpen(false);
    };

    const handleDelete = (step) => {
        setSteps(steps.filter((s) => s.id !== step.id));
    };

    return (
        <div>
            <Flex width={'100%'} direction={'column'} align={'center'} justify={'center'}>
                <Flex width={'100%'} direction={'column'} gap={'6'}>
                    <Flex align={'center'} justify={'between'} gap={'3'}>
                        <Heading size={'5'}>Steps</Heading>
                        <Flex gap={'2'}>
                            <Button radius='large' size={'2'} onClick={() => openModal()}>
                                <IconPlus size={16} /> Add New Step
                            </Button>
                            <Button color='green' radius='large' size={'2'}>
                                Save and Next
                            </Button>
                        </Flex>
                    </Flex>

                    {steps.map((step, index) => (
                        <Card key={step.id}>
                            <Flex p='4' direction='column' gap='4'>
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
                                        <IconButton variant='soft' onClick={() => openModal(step)}>
                                            <IconPencil size={16} />
                                        </IconButton>
                                        <IconButton
                                            color='red'
                                            variant='soft'
                                            onClick={() => handleDelete(step)}>
                                            <IconTrash size={16} />
                                        </IconButton>
                                    </Flex>
                                </Flex>

                                <Text size='3' weight='bold'>
                                    {step.title}
                                </Text>
                                <Text color='gray'>{step.description}</Text>
                            </Flex>
                        </Card>
                    ))}
                </Flex>

                {/* Modal for adding/editing a step */}
                <Dialog.Root open={open} onOpenChange={setOpen}>
                  
                    <Dialog.Content>
                        <StepDetailsDialog step={currentStep} onSave={handleSaveStep} />
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>
        </div>
    );
};

const StepDetailsDialog = ({ step, onSave }) => {
    const [title, setTitle] = useState(step ? step.title : '');
    const [description, setDescription] = useState(step ? step.description : '');

    const handleSave = () => {
        onSave({ id: step ? step.id : null, title, description });
    };

    return (
        <div>
            <Flex width={'100%'} direction={'column'} gap={'6'}>
                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Step Title</Text>
                    <TextField.Root
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        size={'3'}
                        placeholder='Enter step title'
                    />
                </Flex>
                <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                    <Text size={'2'}>Description</Text>
                    <TextArea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        resize='vertical'
                        size={'3'}
                        placeholder='Enter step description'
                    />
                </Flex>
                <Flex justify={'end'} gap={'3'}>
                    <Button onClick={handleSave} radius='large' size={'3'}>
                        Save
                    </Button>
                </Flex>
            </Flex>
        </div>
    );
};
