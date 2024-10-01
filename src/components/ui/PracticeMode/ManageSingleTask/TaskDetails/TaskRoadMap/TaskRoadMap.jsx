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
    TextField,
    TextArea
} from '@radix-ui/themes';
import { IconRoute2, IconPencil, IconTrash, IconPlus, IconLink } from '@tabler/icons-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const TaskRoadMap = () => {
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
            <Flex align={'center'} justify={'between'} mt={'6'}>
                <Heading>Roadmap</Heading>
                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger asChild>
                        <Button variant='surface' color='gray' onClick={() => openModal()}>
                            <IconPlus size={16} /> Add New
                        </Button>
                    </Dialog.Trigger>
                    <Dialog.Content size='4'>
                        <StepDetailsDialog step={currentStep} onSave={handleSaveStep} />
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>

            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='roadmap'>
                    {(provided) => (
                        <Flex
                            direction={'column'}
                            gap={'4'}
                            my={'4'}
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                            {steps.map((item, index) => (
                                <Draggable
                                    key={item.step}
                                    draggableId={item.step.toString()}
                                    index={index}>
                                    {(provided) => (
                                        <Card
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
                                            <Flex p={'4'} direction={'column'} gap={'4'}>
                                                <Flex justify={'between'}>
                                                    <Badge
                                                        color='yellow'
                                                        variant='surface'
                                                        radius='full'
                                                        style={{ width: 'fit-content' }}>
                                                        <Flex p={'1'} gap={'2'} align={'center'}>
                                                            <IconRoute2 size={'15'} />
                                                            {index + 1}
                                                        </Flex>
                                                    </Badge>

                                                    <Flex justify='end' gap='2'>
                                                        <IconButton
                                                            variant='soft'
                                                            onClick={() => openModal(item)}>
                                                            <IconPencil size={16} />
                                                        </IconButton>
                                                        <IconButton
                                                            color='red'
                                                            variant='soft'
                                                            onClick={() => handleDelete(item)}>
                                                            <IconTrash size={16} />
                                                        </IconButton>
                                                    </Flex>
                                                </Flex>

                                                <Text size={'3'} weight={'bold'}>
                                                    {item.title}
                                                </Text>
                                                <Text color='gray'>{item.description}</Text>

                                                <Flex align={'center'} gap={'3'}>
                                                    <Text size={'2'}>Required URL fields : </Text>
                                                    {item.urls.map((url) => (
                                                        <Badge
                                                            radius='full'
                                                            variant='surface'
                                                            size={'3'}
                                                            key={url}>
                                                            <Flex
                                                                justify={'center'}
                                                                align={'center'}
                                                                gap={'2'}>
                                                                <IconLink size={'15'} />
                                                                <Text>{url}</Text>
                                                            </Flex>
                                                        </Badge>
                                                    ))}
                                                </Flex>
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

const StepDetailsDialog = ({ step, onSave }) => {
    const [title, setTitle] = useState(step ? step.title : '');
    const [description, setDescription] = useState(step ? step.description : '');
    const [urls, setUrls] = useState(step ? step.urls.join(', ') : '');

    const handleSave = () => {
        const updatedUrls = urls.split(',').map((url) => url.trim());
        onSave({ step: step ? step.step : null, title, description, urls: updatedUrls });
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
                <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                    <Text size={'2'}>URLs (comma-separated)</Text>
                    <TextArea
                        value={urls}
                        onChange={(e) => setUrls(e.target.value)}
                        resize='vertical'
                        size={'3'}
                        placeholder='Enter URLs separated by commas'
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

const stepdata = [
    {
        step: '1',
        title: 'Setting IDE & Environment',
        description:
            'Create a visually appealing and responsive user interface for a weather application.',
        urls: ['Miro Board Attachment', 'Notion Workplace', 'Figma Design File']
    },
    {
        step: '2',
        title: 'Setting IDE & Environment',
        description:
            'Create a visually appealing and responsive user interface for a weather application.',
        urls: ['Miro Board Attachment', 'Notion Workplace', 'Figma Design File']
    },
    {
        step: '3',
        title: 'Setting IDE & Environment',
        description:
            'Create a visually appealing and responsive user interface for a weather application.',
        urls: ['Miro Board Attachment', 'Notion Workplace', 'Figma Design File']
    }
    // ...other steps
];
