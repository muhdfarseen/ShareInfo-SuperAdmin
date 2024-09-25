import { Text, Card, Flex, Badge, Heading, Button } from '@radix-ui/themes';
import { IconTimeline, IconPencil } from '@tabler/icons-react';

export const StepWiseDetails = () => {
    return (
        <div>
            <Flex align={'center'} justify={'between'} mt={'6'}>
                <Heading>Steps</Heading>
                <Button variant='surface' color='gray'>
                    <IconPencil size={16} />
                    Edit
                </Button>
            </Flex>
            <Flex direction={'column'} gap={'4'} my={'4'}>
                {stepdata.map((item) => (
                    <Card key={item.step}>
                        <Flex p={'4'} direction={'column'} gap={'4'}>
                            <Badge variant='surface' radius='full' style={{ width: 'fit-content' }}>
                                <Flex p={'1'} gap={'2'} align={'center'}>
                                    <IconTimeline size={'15'} />
                                    {item.step}
                                </Flex>
                            </Badge>

                            <Text size={'3'} weight={'bold'}>
                                {item.title}
                            </Text>
                            <Text color='gray'>{item.description}</Text>
                        </Flex>
                    </Card>
                ))}
            </Flex>
        </div>
    );
};

const stepdata = [
    {
        step: '1',
        title: 'Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript.',
        description: (
            <div>
                Create a visually appealing and responsive user interface for a weather application
                using HTML, CSS, and JavaScript. The UI should display real-time weather information
                for a user's specified location, including current conditions, hourly and daily
                forecasts. Implement a location search feature to allow users to easily find weather
                data for any desired location. Ensure the UI is user-friendly and functions
                seamlessly across various devices.
            </div>
        )
    },
    {
        step: '2',
        title: 'Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript.',
        description: (
            <div>
                Create a visually appealing and responsive user interface for a weather application
                using HTML, CSS, and JavaScript. The UI should display real-time weather information
                for a user's specified location, including current conditions, hourly and daily
                forecasts. Implement a location search feature to allow users to easily find weather
                data for any desired location. Ensure the UI is user-friendly and functions
                seamlessly across various devices.
            </div>
        )
    },
    {
        step: '3',
        title: 'Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript.',
        description: (
            <div>
                Create a visually appealing and responsive user interface for a weather application
                using HTML, CSS, and JavaScript. The UI should display real-time weather information
                for a user's specified location, including current conditions, hourly and daily
                forecasts. Implement a location search feature to allow users to easily find weather
                data for any desired location. Ensure the UI is user-friendly and functions
                seamlessly across various devices.
            </div>
        )
    },
    {
        step: '4',
        title: 'Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript.',
        description: (
            <div>
                Create a visually appealing and responsive user interface for a weather application
                using HTML, CSS, and JavaScript. The UI should display real-time weather information
                for a user's specified location, including current conditions, hourly and daily
                forecasts. Implement a location search feature to allow users to easily find weather
                data for any desired location. Ensure the UI is user-friendly and functions
                seamlessly across various devices.
            </div>
        )
    }
];
