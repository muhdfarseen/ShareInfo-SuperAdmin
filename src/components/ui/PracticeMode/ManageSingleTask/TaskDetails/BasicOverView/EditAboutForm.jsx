import { useForm } from 'react-hook-form';
import { TextField, Text, Flex, Select, TextArea, Dialog, Button } from '@radix-ui/themes';
import { useState, useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { useParams } from 'react-router-dom';
import {
    useGetCategoryListQuery,
    useGetPracticeQuery,
    useUpdatePracticeMutation
} from '../../../../../../redux/api-services/practiceApi';

export const EditAboutForm = () => {
    const { id } = useParams();
    const { data } = useGetPracticeQuery(id);
    const { data: categories } = useGetCategoryListQuery();
    const [updatePractice] = useUpdatePracticeMutation();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        defaultValues: {
            practice_task: data?.practice_task || '',
            category: data?.category || '',
            sub_categories: data?.sub_categories?.join(', ') || '',
            description: data?.description || '',
            objective: data?.objective || '',
            overview: data?.overview || '',
            banner_image: '',
            deadline: data?.deadline || ''
        }
    });

    const [selectedDate, setSelectedDate] = useState(
        data?.deadline ? new Date(data.deadline) : null
    );
    const handleDateChange = (date) => {
        if (date) {
            setSelectedDate(date);
            setValue('deadline', date.toISOString().split('T')[0]);
        }
    };
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setValue('banner_image', file);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    // Define showPicker state
    const [showPicker, setShowPicker] = useState(false);

    const onSubmit = (formData) => {
        const updatedData = {
            ...formData,
            sub_categories: formData.sub_categories.split(',').map((item) => item.trim()),
            deadline: selectedDate.toISOString().split('T')[0]
        };
        console.log(updatedData);

        updatePractice({ practiceId: id, data: updatedData })
            .then((response) => {
                console.log('Update successful', response);
            })
            .catch((error) => {
                console.log('Update failed', error);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex width={'100%'} direction={'column'} gap={'6'}>
                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Task Title</Text>
                    <TextField.Root
                        size={'3'}
                        placeholder=''
                        {...register('practice_task', {
                            required: 'Task title is required',
                            maxLength: 500
                        })}
                    />
                    {errors.practice_task && <span>{errors.practice_task.message}</span>}
                </Flex>

                <Flex gap={'3'}>
                    <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                        <Text size={'2'}>Category</Text>
                        <Select.Root
                            defaultValue={data?.category}
                            {...register('category', { required: 'Category is required' })}
                            size='3'>
                            <Select.Trigger placeholder='Category'></Select.Trigger>
                            <Select.Content>
                                <Select.Group>
                                    <Select.Label>Category</Select.Label>
                                    {categories?.length > 0 &&
                                        categories.map((item) => (
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
                        <TextField.Root {...register('sub_categories')} size={'3'} placeholder='' />
                    </Flex>
                </Flex>

                <Flex direction={'column'} gap={'1'}>
                    <Text size={'2'}>Task Description</Text>
                    <TextArea
                        size={'3'}
                        {...register('description', {
                            required: 'Description is required',
                            maxLength: 1000
                        })}
                        resize='vertical'
                        placeholder=''
                    />
                    {errors.description && <span>{errors.description.message}</span>}
                </Flex>

                <Flex width={'100%'} gap={'3'}>
                    <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                        <Text size={'2'}>Task Objective</Text>
                        <TextArea
                            size={'3'}
                            {...register('objective', { maxLength: 1000 })}
                            resize='vertical'
                            placeholder=''
                        />
                    </Flex>

                    <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                        <Text size={'2'}>Assessment Overview</Text>
                        <TextArea
                            size={'3'}
                            {...register('overview', { maxLength: 1000 })}
                            resize='vertical'
                            placeholder=''
                        />
                    </Flex>
                </Flex>

                <Flex width={'100%'} gap={'3'}>
                    <Flex flexGrow={'1'} direction={'column'} gap={'1'}>
                        <Text size={'2'}>Upload Banner Image</Text>
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
                                value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                                onClick={() => setShowPicker(true)}
                            />
                            <Dialog.Content maxWidth={'fit-content'}>
                                <DayPicker
                                    mode='single'
                                    selected={selectedDate}
                                    onSelect={handleDateChange}
                                />
                            </Dialog.Content>
                        </Dialog.Root>
                    </Flex>
                </Flex>

                <Flex justify={'end'} gap={'3'}>
                    <Button radius='large' size={'3'} type='submit'>
                        Save
                    </Button>
                </Flex>
            </Flex>
        </form>
    );
};
