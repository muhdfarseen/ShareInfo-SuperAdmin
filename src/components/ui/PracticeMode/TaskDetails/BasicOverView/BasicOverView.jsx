import { Grid, Text, Flex, Badge, Card, Box } from '@radix-ui/themes';
import shareInfoCoin from '../../../../../assets/Images/ShareInfocoin.svg';
import classes from './BasicOverView.module.css';

export const BasicOverView = () => {
    return (
        <div>
            <Grid mt={'6'} columns={{ initial: '1', md: '3' }} gap='3' width='auto'>
                <Card>
                    <Box p={'4'}>
                        <Flex gap={'8'} justify={'between'}>
                            <Flex direction={'column'} gap={'2'}>
                                <Text color='gray' size={'2'}>
                                    Perks
                                </Text>

                                <Flex justify={'center'} align={'center'} gap={'2'}>
                                    <img src={shareInfoCoin} width={'30px'} height={'30px'} />
                                    <Text color='yellow' size={'5'} weight={'bold'}>
                                        345
                                    </Text>
                                </Flex>
                            </Flex>

                            <Flex direction={'column'} gap={'2'}>
                                <Text color='gray' size={'2'}>
                                    Category & Sub category
                                </Text>

                                <Flex wrap={'wrap'} gap={'2'}>
                                    <Badge color='jade' variant='soft' radius='full'>
                                        Design
                                    </Badge>
                                    <Badge color='gray' variant='soft' radius='full'>
                                        UI Design
                                    </Badge>
                                    <Badge color='gray' variant='soft' radius='full'>
                                        UX Design
                                    </Badge>
                                    <Badge color='gray' variant='soft' radius='full'>
                                        Visual Design
                                    </Badge>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                </Card>

                <Card>
                    <Flex p={'4'} justify={'between'} gap={'2'}>
                        <Flex direction={'column'} gap={'2'}>
                            <Text color='gray' size={'2'}>
                                Task posted on
                            </Text>
                            <Text weight={'bold'} size={'4'}>
                                04 Jan 24
                            </Text>
                        </Flex>
                        <Flex direction={'column'} gap={'2'}>
                            <Text color='gray' size={'2'}>
                                Last updated on
                            </Text>
                            <Text weight={'bold'} size={'4'}>
                                06 Jan 24
                            </Text>
                        </Flex>
                        <Flex direction={'column'} gap={'2'}>
                            <Text color='gray' size={'2'}>
                                Deadline
                            </Text>
                            <Text weight={'bold'} color='red' size={'4'}>
                                12 Jan 24
                            </Text>
                        </Flex>
                    </Flex>
                </Card>
                <Card style={{ padding: '0px' }}>
                    <Flex
                        className={classes.imagecontainer}
                        height={'100%'}
                        align={'center'}
                        justify={'center'}>
                        <Text size={'2'} color='gray'>
                            Hover to see Banner Image
                        </Text>
                    </Flex>
                </Card>
            </Grid>

            <Card mt={'3'}>
                <Flex direction={'column'} gap={'2'} p={'4'}>
                    <Text color='gray' size={'2'}>
                        Task Description
                    </Text>

                    <Text>
                        Create a visually appealing and responsive user interface for a weather
                        application using HTML, CSS, and JavaScript. The UI should display real-time
                        weather information for a user's specified location, including current
                        conditions, hourly and daily forecasts. Implement a location search feature
                        to allow users to easily find weather data for any desired location. Ensure
                        the UI is user-friendly and functions seamlessly across various devices.
                    </Text>
                </Flex>
            </Card>

            <Grid mt={'3'} columns={{ initial: '1', md: '2' }} gap='3' width='auto'>
                <Card>
                    <Flex direction={'column'} gap={'2'} p={'4'}>
                        <Text color='gray' size={'2'}>
                            Task Objective
                        </Text>

                        <Text>
                            Create a visually appealing and responsive user interface for a weather
                            application using HTML, CSS, and JavaScript. The UI should display
                            real-time weather information for a user's specified location, including
                            current conditions, hourly and daily forecasts. Implement a location
                            search feature to allow users to easily find weather data for any
                            desired location. Ensure the UI is user-friendly and functions
                            seamlessly across various devices.
                        </Text>
                    </Flex>
                </Card>
                <Card>
                    <Flex direction={'column'} gap={'2'} p={'4'}>
                        <Text color='gray' size={'2'}>
                            Assessment Overview
                        </Text>

                        <Text>
                            Create a visually appealing and responsive user interface for a weather
                            application using HTML, CSS, and JavaScript. The UI should display
                            real-time weather information for a user's specified location, including
                            current conditions, hourly and daily forecasts. Implement a location
                            search feature to allow users to easily find weather data for any
                            desired location. Ensure the UI is user-friendly and functions
                            seamlessly across various devices.
                        </Text>
                    </Flex>
                </Card>
            </Grid>
        </div>
    );
};
