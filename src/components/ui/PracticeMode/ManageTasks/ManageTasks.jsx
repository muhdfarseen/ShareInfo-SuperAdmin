import { Box, Text, Flex, TextField, Select, Button } from '@radix-ui/themes';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { GridCard } from './GridCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGetCategoryListQuery } from '../../../../redux/api-services/practiceApi';

export const ManageTasks = () => {
    const navigate = useNavigate();
    const { data: categories } = useGetCategoryListQuery();

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('seeall');

    return (
        <Box style={{ padding: '40px 40px 0 40px', width: '100%' }} width={'100%'}>
            <Flex justify={'between'} align={'center'}>
                {/* left section group */}
                <Flex gap={'4'} align={'center'}>
                    <TextField.Root
                        placeholder='Search'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        size='2'>
                        <TextField.Slot>
                            <IconSearch height='16' width='16' />
                        </TextField.Slot>
                    </TextField.Root>

                    {categories && (
                        <Select.Root
                            defaultValue='seeall'
                            size='2'
                            onValueChange={setSelectedCategory}>
                            <Select.Trigger placeholder='Category'></Select.Trigger>
                            <Select.Content>
                                <Select.Group>
                                    <Select.Item value='seeall'>See all</Select.Item>
                                    <Select.Separator />
                                    <Select.Label>Category</Select.Label>
                                    {categories.map((item) => (
                                        <Select.Item key={item.id} value={item.category}>
                                            {item.category}
                                        </Select.Item>
                                    ))}
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                    )}
                </Flex>

                {/* right section buttons */}
                <Flex gap={'4'} align={'center'}>
                    <Button size={'2'} color='indigo'>
                        <Flex align={'center'} justify={'center'} gap={'2'}>
                            <IconPlus size={'17'} />
                            <Text onClick={() => navigate('/dashboard/addnewpracticetask')}>
                                New Practice Task
                            </Text>
                        </Flex>
                    </Button>
                </Flex>
            </Flex>

            <GridCard searchQuery={searchQuery} selectedCategory={selectedCategory} />
        </Box>
    );
};
