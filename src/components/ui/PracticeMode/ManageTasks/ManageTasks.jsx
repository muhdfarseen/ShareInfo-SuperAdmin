import { Box, Text, Flex, TextField, Select, Button } from '@radix-ui/themes';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { GridCard } from './GridCard';
import { useNavigate } from 'react-router-dom';
import { useGetCategoryListQuery } from '../../../../redux/api-services/practiceApi';

export const ManageTasks = () => {
    const navigate = useNavigate();

    const { data } = useGetCategoryListQuery();

    return (
        <Box style={{ padding: '40px 40px 0 40px', width: '100%' }} width={'100%'}>
            <Flex justify={'between'} align={'center'}>
                {/* left section group */}
                <Flex gap={'4'} align={'center'}>
                    <TextField.Root size='2' placeholder='Search'>
                        <TextField.Slot>
                            <IconSearch height='16' width='16' />
                        </TextField.Slot>
                    </TextField.Root>

                    {data && (
                        <Select.Root searchable size='2'>
                            <Select.Trigger placeholder='Category'></Select.Trigger>
                            <Select.Content>
                                <Select.Group>
                                    <Select.Label>Category</Select.Label>
                                    {data?.map((item) => (
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

            <GridCard />
        </Box>
    );
};
