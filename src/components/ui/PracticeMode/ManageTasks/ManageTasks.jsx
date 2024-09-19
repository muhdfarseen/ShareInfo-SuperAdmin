import { Box, Text, Flex, TextField, Select, Button } from '@radix-ui/themes';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { GridCard } from './GridCard';

export const ManageTasks = () => {
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

                    <Select.Root size='2' defaultValue='See'>
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Group>
                                <Select.Label>View</Select.Label>
                                <Select.Item value='See'>See all</Select.Item>
                                <Select.Item value='Ongoing'>Ongoing</Select.Item>
                                <Select.Item value='Completed'>Completed</Select.Item>
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>

                    <Select.Root searchable size='2'>
                        <Select.Trigger placeholder='Category'></Select.Trigger>

                        <Select.Content>
                            <Select.Group>
                                <Select.Label>Category</Select.Label>
                                <Select.Item value='Coding'>Coding</Select.Item>
                                <Select.Item value='Management'>Management</Select.Item>
                                <Select.Item value='Technical'>Technical</Select.Item>
                                <Select.Item value='Communication'>Communication</Select.Item>
                                <Select.Item value='Design'>Design</Select.Item>
                                <Select.Item value='Collaboration'>Collaboration</Select.Item>
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                </Flex>

                {/* right section buttons */}
                <Flex gap={'4'} align={'center'}>
                    <Button size={'2'} color='indigo'>
                        <Flex align={'center'} justify={'center'} gap={'2'}>
                            <IconPlus size={'17'} />
                            <Text>New Practice Task</Text>
                        </Flex>
                    </Button>
                </Flex>
            </Flex>

            <GridCard />
            {/* to do delete tasktable file */}
            {/* <TaskTable /> */}
        </Box>
    );
};
