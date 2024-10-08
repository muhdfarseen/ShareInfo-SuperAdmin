import { useState } from 'react';
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
    TextField
} from '@radix-ui/themes';
import { IconTimeline, IconPencil, IconTrash, IconPlus } from '@tabler/icons-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const StepWiseDetails = () => {
    const [steps, setSteps] = useState(stepdata);
    const [open, setOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(null);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const updatedSteps = Array.from(steps);
        const [movedStep] = updatedSteps.splice(result.source.index, 1);
        updatedSteps.splice(result.destination.index, 0, movedStep);

        setSteps(updatedSteps);
    };

    const openModal = (step = null) => {
        setCurrentStep(step);
        setOpen(true);
    };

    const handleSaveStep = (newStep) => {
        if (currentStep) {
            setSteps(steps.map((s) => (s.step === currentStep.step ? newStep : s)));
        } else {
            setSteps([...steps, { ...newStep, step: steps.length + 1 }]);
        }
        setOpen(false);
    };

    const handleDelete = (step) => {
        setSteps(steps.filter((s) => s.step !== step.step));
    };

    return (
        <div>
            <Flex align='center' justify='between' mt='6'>
                <Heading>Steps</Heading>

                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger asChild>
                        <Button variant='surface' color='gray' onClick={() => openModal()}>
                            <IconPlus size={16} /> Add New Step
                        </Button>
                    </Dialog.Trigger>
                    <Dialog.Content>
                        <StepDetailsDialog step={currentStep} onSave={handleSaveStep} />
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>

            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='steps'>
                    {(provided) => (
                        <Flex
                            direction='column'
                            gap='4'
                            my='4'
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                            {steps.map((step, index) => (
                                <Draggable
                                    key={step.step}
                                    draggableId={step.step.toString()}
                                    index={index}>
                                    {(provided) => (
                                        <Card
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
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
                                                        <IconButton
                                                            variant='soft'
                                                            onClick={() => openModal(step)}>
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
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </Flex>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

const stepdata = [
    {
        step: '1',
        title: 'Design UI',
        description:
            'Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript. The UI should display real-time weather information for a users specified location, including current conditions, hourly and daily forecasts. Implement a location search feature to allow users to easily find weather data for any desired location. Ensure the UI is user-friendly and functions seamlessly across various devices.'
    },
    {
        step: '2',
        title: 'Location Search',
        description:
            'Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript. The UI should display real-time weather information for a users specified location, including current conditions, hourly and daily forecasts. Implement a location search feature to allow users to easily find weather data for any desired location. Ensure the UI is user-friendly and functions seamlessly across various devices.'
    },
    {
        step: '3',
        title: 'Weather Data',
        description:
            'Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript. The UI should display real-time weather information for a users specified location, including current conditions, hourly and daily forecasts. Implement a location search feature to allow users to easily find weather data for any desired location. Ensure the UI is user-friendly and functions seamlessly across various devices.'
    }
];

export const StepDetailsDialog = ({ step, onSave }) => {
    const [title, setTitle] = useState(step ? step.title : '');
    const [description, setDescription] = useState(step ? step.description : '');

    const handleSave = () => {
        onSave({ step: step ? step.step : null, title, description });
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
                        placeholder=''
                    />
                </Flex>
                <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                    <Text size={'2'}>Description</Text>
                    <TextArea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        resize='vertical'
                        size={'3'}
                        placeholder=''
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
