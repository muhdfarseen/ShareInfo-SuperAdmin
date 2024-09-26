import { Box, Flex, Text, Avatar, Grid, Card } from '@radix-ui/themes';

export const UserSubmissionDetails = () => {
    return (
        <div>
            <Box style={{ padding: '30px 40px 30px 40px', width: '100%' }} width={'100%'}>
                <Grid mt={'-9'} columns={{ initial: '1', md: '3' }} gap='3' width='auto'>
                    <Card>
                        <Flex p={'2'} gap={'2'} justify={'center'} direction={'column'}>
                            <Flex gap='3' align='center'>
                                <Avatar
                                    size='5'
                                    src='https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop'
                                    radius='medium'
                                    fallback='T'
                                />
                                <Box>
                                    <Text as='div' size='4' weight='bold'>
                                        Teodros Girmay
                                    </Text>
                                    <Text as='div' size='3' color='gray'>
                                        Student
                                    </Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Card>
                    <Card>
                        <Flex justify={'between'} height={'100%'} p={'4'}>
                            <Box>
                                <Text as='div' size='3' color='gray'>
                                    Submitted on
                                </Text>
                                <Text as='div' size='4' weight='bold'>
                                    9:30pm Wednesday 21 January 2024
                                </Text>
                            </Box>
                        </Flex>
                    </Card>

                    <Card></Card>
                </Grid>
            </Box>
        </div>
    );
};
