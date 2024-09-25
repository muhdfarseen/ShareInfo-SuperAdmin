import { Grid, Text, Flex, Card, Box } from '@radix-ui/themes';
import { SubmissionTable } from './SubmissionTable';

export const Submissions = () => {
    return (
        <div>
            <Box style={{ padding: '30px 40px 30px 40px', width: '100%' }} width={'100%'}>
                <Grid columns={{ initial: '1', md: '3' }} gap='3' width='auto'>
                    <Card>
                        <Flex justify={'between'} height={'100%'} p={'4'} px={'6'}>
                            <Flex height={'100%'} justify={'center'} direction={'column'} gap={'0'}>
                                <Text color='gray' weight={'medium'} size={'3'}>
                                    Total <br />
                                    Enrollment
                                </Text>
                            </Flex>

                            <Flex height={'100%'} justify={'center'} direction={'column'} gap={'0'}>
                                <Text weight={'bold'} size={'8'}>
                                    291
                                </Text>
                            </Flex>
                        </Flex>
                    </Card>

                    <Card>
                        <Flex justify={'between'} height={'100%'} p={'4'} px={'6'}>
                            <Flex height={'100%'} justify={'center'} direction={'column'} gap={'0'}>
                                <Text color='gray' weight={'medium'} size={'3'}>
                                    Total <br />
                                    Submissions
                                </Text>
                            </Flex>

                            <Flex height={'100%'} justify={'center'} direction={'column'} gap={'0'}>
                                <Text weight={'bold'} size={'8'}>
                                    45
                                </Text>
                            </Flex>
                        </Flex>
                    </Card>
                    <Card>
                        <Flex justify={'between'} height={'100%'} p={'4'}>
                            <Flex direction={'column'}>
                                <Text color='gray' size={'2'}>
                                    Approved
                                </Text>
                                <Text weight={'bold'} color='green' size={'6'}>
                                    12
                                </Text>
                            </Flex>
                            <Flex direction={'column'}>
                                <Text color='gray' size={'2'}>
                                    Reviewed
                                </Text>
                                <Text weight={'bold'} color='yellow' size={'6'}>
                                    14
                                </Text>
                            </Flex>
                            <Flex direction={'column'}>
                                <Text color='gray' size={'2'}>
                                    Pending
                                </Text>
                                <Text weight={'bold'} color='red' size={'6'}>
                                    4
                                </Text>
                            </Flex>
                        </Flex>
                    </Card>
                </Grid>

                <SubmissionTable />
            </Box>
        </div>
    );
};
