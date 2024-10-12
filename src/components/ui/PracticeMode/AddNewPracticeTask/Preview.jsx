import { Grid, Text, Flex, Badge, Card, Box, Heading, Button } from '@radix-ui/themes';

import { IconTimeline, IconLink } from '@tabler/icons-react';

const stepsData = [
    { id: 1, title: 'Step 1', description: 'First step description' },
    { id: 2, title: 'Step 2', description: 'Second step description' }
];

const roadmapData = [
    {
        id: 1,
        title: 'Roadmap Item 1',
        description: 'Roadmap description 1',
        urls: ['https://example.com']
    },
    {
        id: 2,
        title: 'Roadmap Item 2',
        description: 'Roadmap description 2',
        urls: ['https://another-example.com']
    }
];

export const Preview = () => {
    return (
        <div>
            <Flex width={'100%'} direction={'column'} align={'center'} justify={'center'}>
                <Flex width={'100%'} direction={'column'} gap={'6'}>
                    <Flex width={'100%'} justify={'between'} gap={'6'}>
                        <Heading size={'5'}>Preview</Heading>
                        <Flex gap={'2'}>
                            <Button color='green' radius='large' size={'2'}>
                                Confirm & Create Task
                            </Button>
                        </Flex>
                    </Flex>

                    {/* Task Overview Section */}

                    <div>
                        <Grid mt={'-3'} columns={{ initial: '1', md: '2' }} gap='4' width='auto'>
                            <Card>
                                <Flex direction={'column'} gap={'3'} p={'4'}>
                                    <img
                                        style={{
                                            objectFit: 'cover',
                                            height: '200px',
                                            width: 'auto',
                                            borderRadius: '10px'
                                        }}
                                        src='https://images.unsplash.com/photo-1726093248575-ab58d2873787?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        alt=''
                                    />
                                    <Text size={'4'} weight={'bold'}>
                                        Mastering UI/UX Design Fundamentals
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
                            </Card>
                            <Card>
                                <Flex direction={'column'} gap={'2'} p={'4'}>
                                    <Text color='gray' size={'2'}>
                                        Objective
                                    </Text>
                                    <Text>
                                        Create a visually appealing and responsive user interface
                                        for a weather application using HTML, CSS, and JavaScript.
                                        The UI should display real-time weather information for a
                                        user's specified location, including current conditions,
                                        hourly and daily forecasts. Implement a location search
                                        feature to allow users to easily find weather data for any
                                        desired location. Ensure the UI is user-friendly and
                                        functions seamlessly across various devices.
                                    </Text>
                                </Flex>
                            </Card>
                        </Grid>

                        <Grid mt={'4'} columns={{ initial: '1', md: '2' }} gap='4' width='auto'>
                            <Card>
                                <Flex direction={'column'} gap={'2'} p={'4'}>
                                    <Text color='gray' size={'2'}>
                                        Description
                                    </Text>

                                    <Text>
                                        Create a visually appealing and responsive user interface
                                        for a weather application using HTML, CSS, and JavaScript.
                                        The UI should display real-time weather information for a
                                        user's specified location, including current conditions,
                                        hourly and daily forecasts. Implement a location search
                                        feature to allow users to easily find weather data for any
                                        desired location. Ensure the UI is user-friendly and
                                        functions seamlessly across various devices.
                                    </Text>
                                    <Flex align={'center'} gap={'2'}>
                                        <Text color='gray' size={'2'}>
                                            Deadline :
                                        </Text>
                                        <Text weight={'bold'} color='red' size={'4'}>
                                            12 Jan 24
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Card>
                            <Card>
                                <Flex direction={'column'} gap={'2'} p={'4'}>
                                    <Text color='gray' size={'2'}>
                                        Assessment Overview
                                    </Text>

                                    <Text>
                                        Create a visually appealing and responsive user interface
                                        for a weather application using HTML, CSS, and JavaScript.
                                        The UI should display real-time weather information for a
                                        user's specified location, including current conditions,
                                        hourly and daily forecasts. Implement a location search
                                        feature to allow users to easily find weather data for any
                                        desired location. Ensure the UI is user-friendly and
                                        functions seamlessly across various devices.
                                    </Text>
                                </Flex>
                            </Card>
                        </Grid>
                    </div>

                    {/* Steps Section */}
                    <Grid columns={{ initial: '1', md: '2' }} gap='4' width='auto'>
                        <Box>
                            <Heading size={'3'}>Steps</Heading>
                            <Flex mt={'3'} direction='column' gap='4'>
                                {stepsData.map((step, index) => (
                                    <Card key={step.id}>
                                        <Flex p='4' direction='column' gap='2'>
                                            <Flex justify='between'>
                                                <Badge variant='surface' radius='full'>
                                                    <Flex p='1' gap='2' align='center'>
                                                        <IconTimeline size='15' />
                                                        {index + 1}
                                                    </Flex>
                                                </Badge>
                                            </Flex>
                                            <Text size='3' weight='bold'>
                                                {step.title}
                                            </Text>
                                            <Text color='gray'>{step.description}</Text>
                                        </Flex>
                                    </Card>
                                ))}
                            </Flex>
                        </Box>
                        <Box>
                            <Heading size={'3'}>Roadmap</Heading>
                            <Flex mt={'3'} direction='column' gap='4'>
                                {roadmapData.map((item, index) => (
                                    <Card key={item.id}>
                                        <Flex p='4' direction='column' gap='2'>
                                            <Flex justify='between'>
                                                <Badge
                                                    color='yellow'
                                                    variant='surface'
                                                    radius='full'>
                                                    <Flex p='1' gap='2' align='center'>
                                                        <IconTimeline size='15' />
                                                        {index + 1}
                                                    </Flex>
                                                </Badge>
                                            </Flex>
                                            <Text size='3' weight='bold'>
                                                {item.title}
                                            </Text>
                                            <Text color='gray'>{item.description}</Text>
                                            {item.urls.length > 0 && (
                                                <Flex align='center' gap='2'>
                                                    <Text size='2'>Required URLs:</Text>
                                                    {item.urls.map((url, idx) => (
                                                        <Badge
                                                            key={idx}
                                                            radius='full'
                                                            variant='surface'>
                                                            <Flex align='center' gap='2'>
                                                                <IconLink size='15' />
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
                        </Box>
                    </Grid>
                </Flex>
            </Flex>
        </div>
    );
};
