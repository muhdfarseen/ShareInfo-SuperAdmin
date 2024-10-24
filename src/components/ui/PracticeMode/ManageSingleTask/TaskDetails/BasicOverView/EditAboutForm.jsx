import { useForm } from 'react-hook-form';
import { TextField, Text, Flex, Select, TextArea, Dialog, Button } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { useParams } from 'react-router-dom';
import {
    useGetCategoryListQuery,
    useGetPracticeQuery,
    useUpdatePracticeMutation
} from '../../../../../../redux/api-services/practiceApi';
import { toast } from 'sonner';

export const EditAboutForm = ({ toggleDialog }) => {
    const { id } = useParams();
    const { data } = useGetPracticeQuery(id);
    const { data: categories } = useGetCategoryListQuery();
    const [updatePractice] = useUpdatePracticeMutation();
    const { refetch } = useGetPracticeQuery(id);

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm();

    useEffect(() => {
        if (data) {
            setValue('practice_task', data.practice_task);
            setValue('category', data.category);
            setValue('sub_categories', data.sub_categories?.join(', '));
            setValue('description', data.description);
            setValue('objective', data.objective);
            setValue('overview', data.overview);
            setValue('banner_image', data.banner_image);
            setSelectedDate(data.deadline ? new Date(data.deadline) : null);
        }
    }, [data, setValue]);

    const [selectedDate, setSelectedDate] = useState(
        data?.deadline ? new Date(data.deadline) : null
    );
    const handleDateChange = (date) => {
        if (date) {
            setSelectedDate(date);
            setValue('deadline', date.toISOString().split('T')[0]);
        }
    };

    // Define showPicker state
    const [showPicker, setShowPicker] = useState(false);

    const onSubmit = async (formData) => {
        const selectedCategory = categories?.find((item) => item.category === formData.category);

        const updatedData = {
            ...formData,
            category: selectedCategory?.id || null,
            sub_categories: formData.sub_categories.split(',').map((item) => item.trim()),
            deadline: selectedDate?.toISOString().split('T')[0] || null
        };

        console.log('Updated Data:', updatedData);

        try {
            setLoading(true);
            await updatePractice({ practiceId: id, practiceData: updatedData });
            refetch();
            toggleDialog();
            toast.success('Updated Successfully !');
        } catch (error) {
            console.log('Update failed', error);
            toast.error('Update failed');
        } finally {
            setLoading(false);
        }
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
                            value={watch('category') || ''} // Get current form value
                            onValueChange={(value) => setValue('category', value)} // Update category value
                            size='3'>
                            <Select.Trigger placeholder='Select Category' />
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
                        {errors.category && <span>{errors.category.message}</span>}
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
                        <Text size={'2'}>Banner Image URL</Text>
                        <TextField.Root
                            size={'3'}
                            placeholder='Enter image URL'
                            {...register('banner_image')}
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
                    <Button
                        radius='large'
                        size={'3'}
                        color='gray'
                        variant='soft'
                        onClick={toggleDialog}>
                        Cancel
                    </Button>
                    <Button loading={loading} radius='large' size={'3'} type='submit'>
                        Update
                    </Button>
                </Flex>
            </Flex>
        </form>
    );
};
