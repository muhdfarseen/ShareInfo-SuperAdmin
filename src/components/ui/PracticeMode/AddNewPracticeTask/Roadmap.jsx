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
import { IconTimeline, IconPencil, IconTrash, IconLink, IconPlus } from '@tabler/icons-react';

export const Roadmap = () => {
    const [roadmapItems, setRoadmapItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    const openModal = (item = null) => {
        setCurrentItem(item);
        setOpen(true);
    };

    const handleSaveRoadmap = (newItem) => {
        if (currentItem) {
            // Edit existing roadmap item
            setRoadmapItems(
                roadmapItems.map((item) => (item.id === currentItem.id ? newItem : item))
            );
        } else {
            // Add new roadmap item
            setRoadmapItems([...roadmapItems, { ...newItem, id: roadmapItems.length + 1 }]);
        }
        setOpen(false);
    };

    const handleDelete = (item) => {
        setRoadmapItems(roadmapItems.filter((i) => i.id !== item.id));
    };

    return (
        <div>
            <Flex width={'100%'} direction={'column'} align={'center'} justify={'center'}>
                <Flex width={'100%'} direction={'column'} gap={'6'}>
                    <Flex align={'center'} justify={'between'} gap={'3'}>
                        <Heading size={'5'}>Roadmap</Heading>
                        <Flex gap={'2'}>
                            <Button radius='large' size={'2'} onClick={() => openModal()}>
                                <IconPlus size={16} /> Add New Roadmap
                            </Button>
                            <Button color='green' radius='large' size={'2'}>
                                Save and Next
                            </Button>
                        </Flex>
                    </Flex>

                    {/* Display roadmap items */}
                    {roadmapItems.map((item, index) => (
                        <Card key={item.id}>
                            <Flex p='4' direction='column' gap='4'>
                                <Flex justify={'between'}>
                                    <Badge
                                        color='yellow'
                                        style={{ width: 'fit-content' }}
                                        variant='surface'
                                        radius='full'>
                                        <Flex p='1' gap='2' align='center'>
                                            <IconTimeline size='15' />
                                            {index + 1}
                                        </Flex>
                                    </Badge>
                                    <Flex gap='2'>
                                        <IconButton variant='soft' onClick={() => openModal(item)}>
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
                                <Text size='3' weight='bold'>
                                    {item.title}
                                </Text>
                                <Text color='gray'>{item.description}</Text>
                                {item.urls && item.urls.length > 0 && (
                                    <Flex align={'center'} gap={'3'}>
                                        <Text size={'2'}>Required URL fields :</Text>
                                        {item.urls.map((url, idx) => (
                                            <Badge
                                                radius='full'
                                                variant='surface'
                                                size={'3'}
                                                key={idx}>
                                                <Flex justify={'center'} align={'center'} gap={'2'}>
                                                    <IconLink size={'15'} />
                                                    <Text>{url}</Text>
                                                </Flex>
                                            </Badge>
                                        ))}
                                    </Flex>
                                )}
                            </Flex>
                        </Card>
                    ))}
                </Flex>

                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Content>
                        <RoadmapDetailsDialog item={currentItem} onSave={handleSaveRoadmap} />
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>
        </div>
    );
};

// Modal Dialog for roadmap item details
const RoadmapDetailsDialog = ({ item, onSave }) => {
    const [title, setTitle] = useState(item ? item.title : '');
    const [description, setDescription] = useState(item ? item.description : '');
    const [urls, setUrls] = useState(item ? item.urls.join(', ') : ''); // Handle URL input

    const handleSave = () => {
        const updatedUrls = urls.split(',').map((url) => url.trim()); // Split and clean URLs
        onSave({ id: item ? item.id : null, title, description, urls: updatedUrls });
    };

    return (
        <div>
            <Flex width={'100%'} direction={'column'} gap={'6'}>
                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Roadmap Title</Text>
                    <TextField.Root
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        size={'3'}
                        placeholder='Enter title'
                    />
                </Flex>
                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Description</Text>
                    <TextArea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        resize='vertical'
                        size={'3'}
                        placeholder='Enter description'
                    />
                </Flex>
                <Flex direction={'column'} gap={'1'}>
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
