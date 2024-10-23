import { TextField, Text, Flex, Select, TextArea, Dialog, Button } from '@radix-ui/themes';
import { useState, useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { useParams } from 'react-router-dom';
import {
    useGetCategoryListQuery,
    useGetPracticeQuery
} from '../../../../../../redux/api-services/practiceApi';

export const EditAboutForm = () => {
    const [value, setValue] = useState(null);
    const [showPicker, setShowPicker] = useState(false);

    const { id } = useParams();
    const { data } = useGetPracticeQuery(id);
    const { data: categories } = useGetCategoryListQuery();

    const handleDateChange = (selectedDate) => {
        setValue(selectedDate);
        setShowPicker(false);
    };

    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <Flex width={'100%'} direction={'column'} gap={'6'}>
                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Task Title</Text>
                    <TextField.Root value={data?.practice_task} size={'3'} placeholder='' />
                </Flex>

                <Flex gap={'3'}>
                    <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                        <Text size={'2'}>Category</Text>
                        <Select.Root defaultValue={data.category} size='3'>
                            <Select.Trigger placeholder='Category'></Select.Trigger>
                            <Select.Content>
                                <Select.Group>
                                    <Select.Label>Category</Select.Label>
                                    {categories.map((item) => (
                                        <Select.Item key={item.id} value={item.category}>
                                            {item.category}
                                        </Select.Item>
                                    ))}
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                    </Flex>
                    <Flex flexGrow={'2'} direction={'column'} gap={'1'}>
                        <Text size={'2'}>Sub Category (comma-separated)</Text>
                        <TextField.Root
                            value={data?.sub_categories?.join(', ')}
                            size={'3'}
                            placeholder=''
                        />
                    </Flex>
                </Flex>

                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Task Description</Text>
                    <TextArea
                        value={data?.description}
                        resize='vertical'
                        size={'3'}
                        placeholder=''
                    />
                </Flex>

                <Flex width={'100%'} gap={'3'}>
                    <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                        <Text size={'2'}>Task Objective</Text>
                        <TextArea
                            value={data?.objective}
                            resize='vertical'
                            size={'3'}
                            placeholder=''
                        />
                    </Flex>

                    <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                        <Text size={'2'}>Assessment Overview</Text>
                        <TextArea
                            value={data?.overview}
                            resize='vertical'
                            size={'3'}
                            placeholder=''
                        />
                    </Flex>
                </Flex>

                <Flex width={'100%'} gap={'3'}>
                    <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                        <Text size={'2'}>Upload banner Image</Text>
                        <TextField.Root
                            size={'3'}
                            placeholder='Click to upload an image'
                            value={fileName}
                            onClick={handleUploadClick}
                            className='readonlytextinput'
                            style={{ cursor: 'pointer' }}
                        />
                        <input
                            type='file'
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </Flex>
                    <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                        <Text size={'2'}>Deadline</Text>
                        <Dialog.Root open={showPicker} onOpenChange={setShowPicker}>
                            <TextField.Root
                                color='indigo'
                                size={'3'}
                                placeholder='Pick date'
                                defaultValue={data?.deadline}
                                value={value && value.toLocaleDateString()}
                                onClick={() => setShowPicker(true)}
                            />
                            <Dialog.Content maxWidth={'fit-content'}>
                                <DayPicker
                                    mode='single'
                                    selected={value}
                                    onSelect={handleDateChange}
                                />
                            </Dialog.Content>
                        </Dialog.Root>
                    </Flex>
                </Flex>

                <Flex justify={'end'} gap={'3'}>
                    <Dialog.Close>
                        <Button radius='large' size={'3'}>
                            Save
                        </Button>
                    </Dialog.Close>
                </Flex>
            </Flex>
        </div>
    );
};
